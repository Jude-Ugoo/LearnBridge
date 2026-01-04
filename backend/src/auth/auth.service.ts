import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { sanitizeUser, SanitizedUser } from './sanitize-user';
import { AdminCreateDto, AuthDto, SignInDto } from './dto';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

  async register(dto: AuthDto) {
    const hashStr = String(dto.hash);
    const hashedPassword = await argon2.hash(hashStr);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hashedPassword,
          name: dto.name,
          gender: dto.gender,
          skillLevel: dto.skillLevel,
          learningIntrest: dto.learningIntrest,
          role: dto.role,
        },
      });

      const userSafe: SanitizedUser = sanitizeUser(user);
      return {
        token: await this.signToken(user.id, user.email),
        user: userSafe,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }

      throw error;
    }
  }

  async createAdmin(dto: AdminCreateDto, secretKey: string) {
    const adminSecret = this.config.get<string>('ADMIN_CREATION_SECRET');

    if (secretKey !== adminSecret) {
      throw new ForbiddenException('Credentials incorrect for admin creation');
    }

    try {
      const hashStr = String(dto.hash);
      const hashedPassword = await argon2.hash(hashStr);

      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hashedPassword,
          name: dto.name,
          role: Role.ADMIN,
          gender: dto.gender,
        },
      });
      const userSafe: SanitizedUser = sanitizeUser(user);
      return {
        token: await this.signToken(user.id, user.email),
        user: userSafe,
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async login(dto: SignInDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (!user) {
      throw new ForbiddenException('User not found');
    }

    const hashStr = String(dto.hash);
    const isHashValid = await argon2.verify(user.hash, hashStr);

    if (!isHashValid) {
      throw new ForbiddenException('Invalid Credentials Provided');
    }

    const userSafe: SanitizedUser = sanitizeUser(user);
    return {
      access_token: await this.signToken(user.id, user.email),
      user: userSafe,
    };
  }

  async signToken(userId: string, email: string): Promise<string> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('ACCESS_TOKEN');

    const token = await this.jwt.signAsync(payload, {
      secret,
      expiresIn: '1h',
    });

    return token;
  }
}

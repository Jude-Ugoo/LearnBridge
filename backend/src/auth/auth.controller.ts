import { Body, Controller, Headers, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminCreateDto, AuthDto, SignInDto } from './dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'Register new user (Student || Instructor)' })
   @ApiBody({
    description: 'Registration payload',
    schema: {
      example: {
        email: 'john@example.com',
        password: 'securePassword!',
        name: 'John Doe',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'User successfully registered',
    schema: {
      example: {
        token: 'jwt_token_here',
        id: 'user_12345',
        email: 'john@example.com',
        name: "John Doe"
      },
    },
  })
  async register(@Body() dto: AuthDto) {
    return await this.authService.register(dto);
  }

  @Post('register-admin')
  @ApiOperation({ summary: 'Register an admin' })
  @ApiBody({
    description: 'Admin registration payload',
    schema: {
      example: {
        email: 'admin@example.com',
        password: 'securePassword!',
        name: 'Jane Doe',
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Admin successfully registered',
    schema: {
      example: {
        id: 'admin_001',
        email: 'admin@example.com',
        token: 'jwt_token_here',
        name: 'Jane Doe'
      },
    },
  })
  async createAdmin(
    @Body() dto: AdminCreateDto,
    @Headers('admin-secret') secret: string,
  ) {
    return this.authService.createAdmin(dto, secret);
  }

  @Post('login')
  @ApiOperation({ summary: 'Log in as a user' })
  @ApiBody({
    description: 'User login credentials',
    schema: {
      example: {
        email: 'john@example.com',
        password: 'strongPassword123',
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Login successful',
    schema: {
      example: {
        id: 'user_12345',
        email: 'john@example.com',
        token: 'jwt_token_here',
        name: 'Jane Doe'
      },
    },
  })
  async login(@Body() dto: SignInDto) {
    return await this.authService.login(dto);
  }
}

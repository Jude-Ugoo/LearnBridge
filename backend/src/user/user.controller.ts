import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  UseGuards,
  ForbiddenException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user-dto';
import { JwtGuard } from 'src/auth/guards';
import { GetUser } from 'src/auth/decorator/get-user-decorator';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users (Admin only)' })
  @ApiResponse({ status: 200, description: 'List of all users' })
  findAll(@GetUser('role') role: string) {
    const isAdmin = role === 'ADMIN';

    if (!isAdmin) {
      throw new ForbiddenException('Not Authorized!');
    }

    return this.userService.findAll();
  }

  @Get('me')
  @ApiOperation({ summary: 'Get the authenticated user profile' })
  @ApiResponse({
    status: 200,
    description: 'Returns the user profile',
    schema: {
      example: {
        id: 'user-uuid',
        email: 'john@example.com',
        name: 'John Doe',
        role: 'STUDENT',
      },
    },
  })
  getProfile(@GetUser('id') userId: string) {
    return this.userService.findOne(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID (self only)' })
  @ApiParam({ name: 'id', description: 'UUID of the user' })
  @ApiResponse({
    status: 200,
    description: 'Returns the user details',
  })
  findOne(
    @Param('id', new ParseUUIDPipe()) id: string,
    @GetUser('id') userId: string,
  ) {
    if (id !== userId) {
      throw new ForbiddenException('Access denied.');
    }

    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user by ID (self only)' })
  @ApiParam({ name: 'id', description: 'UUID of the user' })
  @ApiResponse({
    status: 200,
    description: 'User successfully updated',
  })
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @GetUser('id') userId: string,
    @GetUser('role') role: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    if (id !== userId && role !== 'ADMIN') {
      throw new ForbiddenException(
        'Access denied - You can only update your own account.',
      );
    }

    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID (self only)' })
  @ApiParam({ name: 'id', description: 'UUID of the user' })
  @ApiResponse({
    status: 200,
    description: 'User successfully deleted',
  })
  remove(
    @Param('id', new ParseUUIDPipe()) id: string,
    @GetUser('id') userId: string,
    @GetUser('role') role: string,
  ) {
    if (id !== userId && role !== 'ADMIN') {
      throw new ForbiddenException(
        'Access denied - You can only delete your own account.',
      );
    }

    return this.userService.remove(id);
  }
}

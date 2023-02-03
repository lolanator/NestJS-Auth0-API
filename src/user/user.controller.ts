import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/decorators/getUser.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/api/external')
  ping(@User() user) {
    console.log('working');
    const userSub = user.sub;
    const email = user.email;
    return { response: 'success!! woohoooo', userEmail: email, sub: userSub };
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
//import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  private readonly user = {
    username: 'user4',
    password: 'pass4#',
  };

  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    // if (username === this.user.username && await bcrypt.compare(password, this.user.password)) {
    if (username === this.user.username && await password === this.user.password) {
      const { password, ...result } = this.user;
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: any) {
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

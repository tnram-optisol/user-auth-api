import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HelperService {
  private saltRounds: number;
  constructor() {
    this.saltRounds = 10;
  }
  async generateSalt() {
    return bcrypt.genSaltSync(this.saltRounds);
  }
  async hashPassword(password: string) {
    const saltSync = await this.generateSalt();
    return bcrypt.hashSync(password, saltSync);
  }
  async comparePassword(password: string, hashPassword: string) {
    return bcrypt.compareSync(password, hashPassword);
  }
}

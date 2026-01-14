import jwt from 'jsonwebtoken';
import { env } from '../config/env';

export class AuthService {
  static login(username: string) {
    return jwt.sign(
      { username, role: 'RECRUITER' },
      env.JWT_SECRET
    );
  }
}

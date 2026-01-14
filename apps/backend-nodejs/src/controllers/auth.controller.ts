import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  static login(req: Request, res: Response) {
    const token = AuthService.login(req.body.username);
    res.json({ accessToken: token });
  }
}

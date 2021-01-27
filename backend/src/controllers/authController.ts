import { Request, Response } from 'express';
import AuthService from '../services/authService';

const authService = new AuthService();

class UserController {
  public async login(request: Request, response: Response): Promise<Response> {
    return response.json();
  }

  public async register(request: Request, response: Response): Promise<Response> {
    return response.json();
  }
}

export default UserController;
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UserService from '../services/userService';

class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    return response.json();
  }

  public async store(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;

      const userService = container.resolve(UserService);
  
      const user = await userService.create({
        email,
        password
      });
  
      return response.json(user);
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }

  public async show(request: Request, response: Response): Promise<Response> {
    return response.json();
  }

  public async update(request: Request, response: Response): Promise<Response> {
    return response.json();
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    return response.json();
  }
}

export default UserController;
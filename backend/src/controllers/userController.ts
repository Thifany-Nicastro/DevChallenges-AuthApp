import { Request, Response } from 'express';
import UserService from '../services/userService';

const userService = new UserService();

class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    const users = await userService.list();

    return response.json(users);
  }

  public async store(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;
  
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
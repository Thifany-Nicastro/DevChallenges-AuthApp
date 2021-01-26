import { Request, Response } from 'express';
// import { getRepository } from 'typeorm';

// import User from '../models/user';
// import UserService from '../services/CreateUserService';

class UserController {
  public async index(request: Request, response: Response): Promise<Response> {
    return response.json();
  }

  public async store(request: Request, response: Response): Promise<Response> {
    return response.json();
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
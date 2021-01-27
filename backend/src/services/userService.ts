import User, { IUser } from '../models/user';

interface IRequest {
  email: string;
  password: string;
}

class UserService {
  public async list(): Promise<IUser> {
    const users = User.find().sort({ createdAt: -1 });

    return users;
  }

  public async create({ email, password }: IRequest): Promise<IUser> {
    const user = new User({
      email: email,
      password: password
    });

    await user.save();

    return user;
  }
}

export default UserService;
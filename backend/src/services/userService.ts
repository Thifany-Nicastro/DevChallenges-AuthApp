import User from '../models/user';

interface Request {
  email: string;
  password: string;
}

class UserService {
  public async create({ email, password }: Request) {
    const user = new User({
      email: email,
      password: password
    });

    await user.save();

    return user;
  }
}

export default UserService;
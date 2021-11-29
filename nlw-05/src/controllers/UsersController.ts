import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {
  async index(req: Request, res: Response) {
    try {
      const usersService = new UsersService();
      const users = await usersService.index();
      
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.body;
      const usersService = new UsersService();
      const users = await usersService.create(email);

      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  }
}

export { UsersController };
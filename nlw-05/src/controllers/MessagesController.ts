import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService";

class MessagesController {
  async index(req: Request, res: Response) {
    try {
      const messagesService = new MessagesService();
      const messages = await messagesService.index();
      
      return res.status(200).json({
        status: true,
        message: "Mensagens encontradas com sucesso.",
        data: messages,
      });
    } catch (e) {
      return res.status(400).json({
        status: false,
        message: e.message,
      });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { admin_id, text, user_id } = req.body;
      const messagesService = new MessagesService();
      const messages = await messagesService.create({ admin_id, text, user_id });

      return res.json(messages);
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  }
  
  async listByUser(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const messagesService = new MessagesService();
      const messages = await messagesService.listByUser(id);

      return res.json(messages);
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  }
}

export { MessagesController };
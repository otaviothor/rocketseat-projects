import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
  async index(req: Request, res: Response) {
    try {
      const settingsService = new SettingsService();
      const settings = await settingsService.index();
      
      return res.json(settings);
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { chat, username } = req.body;
      const settingsService = new SettingsService();
      const settings = await settingsService.create({ chat, username });

      return res.json(settings);
    } catch (e) {
      return res.status(400).json({ 
        message: e.message,
      });
    }
  }

  async findByUsername(req: Request, res: Response) {
    try {
      const { username } = req.params;

      const settingsService = new SettingsService();
      const settings = await settingsService.findByUsername(username);

      return res.json(settings);
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { username } = req.params;
      const { chat } = req.body;

      const settingsService = new SettingsService();
      const settings = await settingsService.update(username, chat);

      return res.json(settings);
    } catch (e) {
      return res.status(400).json({
        message: e.message,
      });
    }
  }
}

export { SettingsController };
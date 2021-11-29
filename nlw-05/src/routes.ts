import { Router } from 'express';
import { MessagesController } from './controllers/MessagesController';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

/**
 * tipos de parametros
 * route params => parametros de rotes
 * query params => parametros de filtros e buscas
 * body params => parametros no corpo da requisicao
 */

routes.get("/settings", settingsController.index);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);
routes.post("/settings", settingsController.create);

routes.get("/users", usersController.index);
routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages", messagesController.index);
routes.get("/messages/:id", messagesController.listByUser);


export { routes };
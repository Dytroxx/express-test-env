import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();
import UserService from '../services/users.service';

const userService = new UserService();

router
  .route('/')
  .get( (req: Request, res: Response, next: NextFunction) => {
    res.send(userService.getUsers());
  });

router
  .route('/:userId')
  .get( (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;
    res.send(userService.getUserById(userId));
  })
  .delete( (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;
    res.send(userService.deleteUserById(userId));
  });

export default router;

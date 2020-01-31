import * as Express from 'express';
import moduleController from './modules/moduleController';
import imageController from './docker/imageController';

const router = Express.Router();

router.get('/', (req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  return res.json(
    {
      'error': false,
      'message': '',
      'data':{
        'health': true,
        'message': 'This is api endpoint version 1 for FastiTocalon.'
      }
    }
  )}
);
router.get('/module', moduleController.list);
router.post('/module', moduleController.add);
router.get('/module/:id', moduleController.detail);
router.post('/module/:id', moduleController.update);
router.delete('/module/:id', moduleController.delete);

router.get('/docker/image', imageController.list);

export default router;
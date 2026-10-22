import Router from '@koa/router';
import ItemController from '/item-controller.js';

const router = new Router({
  prefix: '/item',
});
const controller = new ItemController();

router.get('/', controller.getItem.bind(controller));
router.get('/:id', controller.getItem.bind(controller));
router.patch('/:id', controller.updateItem.bind(controller));
router.post('/', controller.createItem.bind(controller));
router.delete('/:id', controller.deleteItem.bind(controller));

export default router;

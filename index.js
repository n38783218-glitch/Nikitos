import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import Router from './item/item-router.js';
import { ItemController } from './item/item-controller';
import ItemController from './item/item-controller';

const app = new Koa();

app.use(BodyParser());
app.use(itemRouter.routes());
app.use(itemRouter.allowedMethos());

app.listen(3000);

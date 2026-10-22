import ItemService from './item.service';
import { isNotEmpty, isNotEmptyArray, isString } from '../utils.js';
import { EItemStatus } from '../enams';

export default class ItemController {
  constructor() {
    this.servise = new ItemService();
  }

  async getItem(ctx) {
    return this.servise.GetOn();
  }
  async getItems(ctx) {
    return this.servise.GetAll();
  }
  async deleteItem(ctx) {
    return this.servise.softDelete();
  }
  async updateItem(ctx) {
    const { id } = ctx.params;
    const {
      name,
      properties,
      status,
      location_id,
      current_location_id,
      category_id,
    } = ctx.request.body;
    //condition (написать проверки такие же как ниже)
    return this.servise.update();
  }

  async createItem(ctx) {
    const {
      name,
      properties,
      status,
      location_id,
      current_location_id,
      category_id,
    } = ctx.request.body;

    if (
      isNotEmpty(name) ||
      isNotEmpty(properties) ||
      isNotEmpty(status) ||
      isCorrectStatus(EItemStatus, status) ||
      isNotEmpty(location_id) ||
      isNotEmpty(current_location_id)
    ) {
      const res = this.servise.create({
        name,
        properties,
        status,
        location_id,
        current_location_id,
        category_id,
      });

      ctx.status = 201;
      ctx.budy = {
        data: res,
      };
      return;
    }

    ctx.status = 400;
    ctx.body = {
      status: 400,
      message: 'Переданы неверные клиентские данные',
    };

    return this.servise.create();
  }

  #hasCorrectItemData({}) {}
}

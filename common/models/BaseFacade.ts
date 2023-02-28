import { Singleton } from '../index';
import {Dto} from "./Dto";
import {Fto} from "./Fto";

export default class BaseFacade<T> extends Singleton<T> {
  constructor() {
    super();
  }

  protected populate<T>(dto: Dto<T>): Fto<T> {
    return {
      code: dto.code,
      data: dto.data,
      isSuccess: dto.isSuccess
    };
  }
}

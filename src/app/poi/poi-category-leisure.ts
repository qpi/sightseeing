import { PoiCategoryLeisureEnum } from './poi-category-leisure-enum';
import { PoiCategory } from './poi-category';
export class PoiCategoryLeisure extends PoiCategory {
  constructor() {
    super('leisure', 'Leisure');
    this.setEnum(PoiCategoryLeisureEnum);
  }
}

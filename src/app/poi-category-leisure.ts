import { PoiCategoryLeisureEnum } from './poi-category-leisure-enum';
import { PoiCategory } from './poi-category';
export class PoiCategoryLeisure extends PoiCategory {
  get name(): String {
    return 'leisure';
  }
  getEnum() {
    return PoiCategoryLeisureEnum;
  }
}

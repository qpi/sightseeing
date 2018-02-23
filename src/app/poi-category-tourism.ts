import { PoiCategory } from './poi-category';
import { PoiCategoryTourismEnum } from './poi-category-tourism-enum';
export class PoiCategoryTourism extends PoiCategory {
  get name(): String {
    return 'tourism';
  }
  getEnum() {
    return PoiCategoryTourismEnum;
  }
}

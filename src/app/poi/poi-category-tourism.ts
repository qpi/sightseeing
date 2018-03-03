import { PoiCategory } from './poi-category';
import { PoiCategoryTourismEnum } from './poi-category-tourism-enum';
export class PoiCategoryTourism extends PoiCategory {
  constructor() {
    super('tourism', 'Tourism');
    this.setEnum(PoiCategoryTourismEnum);
  }
}

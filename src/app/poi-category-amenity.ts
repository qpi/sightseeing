import { PoiCategoryAmenityEnum } from './poi-category-amenity-enum';
import { PoiCategory } from './poi-category';
export class PoiCategoryAmenity extends PoiCategory {
  get name(): String {
    return 'amenity';
  }
  getEnum() {
    return PoiCategoryAmenityEnum;
  }
}

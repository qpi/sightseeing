import { PoiCategoryAmenityEnum } from './poi-category-amenity-enum';
import { PoiCategory } from './poi-category';
export class PoiCategoryAmenity extends PoiCategory {
  constructor() {
    super('amenity', 'Amenity');
    this.setEnum(PoiCategoryAmenityEnum);
  }
}

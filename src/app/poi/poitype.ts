import { Serializable } from '../serializable';
import { PoiCategory } from './poi-category';
export class PoiType extends Serializable {
  constructor( public id: String, public category: String, public title: String ) {
    super();
  }
}

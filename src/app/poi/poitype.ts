import { PoiCategory } from './poi-category';
export class PoiType {
  constructor( public id: String, public category: PoiCategory, public title: String ) {}
}

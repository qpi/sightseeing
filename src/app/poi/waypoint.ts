import { Serializable } from '../serializable';
export class WayPoint extends Serializable {
  constructor(public latitude: number, public longitude: number) {
    super();
  }
}

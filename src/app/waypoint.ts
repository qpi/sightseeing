export class WayPoint {
  constructor(protected _latitude: number, protected _longitude: number) { }

  get latitude(): number {
    return this._latitude;
  }

  get longitude(): number {
    return this._longitude;
  }
}

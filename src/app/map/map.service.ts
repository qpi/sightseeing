import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MapService {

  // by default set the coordinates to Budapest
  private _latitude$: BehaviorSubject<number> = new BehaviorSubject<number>(47.498333);
  public readonly latitude$ = this._latitude$.asObservable();

  private _longitude$: BehaviorSubject<number> = new BehaviorSubject<number>(19.040833);
  public readonly longitude$ = this._longitude$.asObservable();

  private _zoom$: BehaviorSubject<number> = new BehaviorSubject<number>(11);
  public readonly zoom$ = this._zoom$.asObservable();

  get latitude() {
    return this._latitude$.value;
  }

  set latitude( value: number) {
    this._latitude$.next(value);
  }

  get longitude() {
    return this._longitude$.value;
  }

  set longitude( value: number) {
    this._longitude$.next(value);
  }

  get zoom() {
    return this._zoom$.value;
  }

  set zoom( value: number) {
    this._zoom$.next(value);
  }

  public reset(): void {
    this.latitude = 47.498333;
    this.longitude = 19.040833;
    this.zoom = 11;
  }

  constructor() {}

}

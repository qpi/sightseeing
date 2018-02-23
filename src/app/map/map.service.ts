import { PickType } from './picktype';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class MapService {

  private _pickType$: BehaviorSubject<PickType> = new BehaviorSubject<PickType>(PickType.none);
  public readonly pickType$ = this._pickType$.asObservable();

  constructor() {}

  public setPickType(pickType: PickType) {
    this._pickType$.next(pickType);
  }

  public resetPickType() {
    this.setPickType(PickType.none);
  }

}

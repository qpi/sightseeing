import { PoiCategory } from './poi-category';
import { PoiType } from './poitype';
import { WayPoint } from '../waypoint';
export class Poi extends WayPoint {

  private _address: String = null;
  private _email: String = null;
  private _facebook: String = null;
  private _phone: String = null;
  private _website: String = null;

  constructor(
    private _type: PoiType,
    private _id: String = null,
    protected _latitude: number,
    protected _longitude: number,
    private _name: String = null
  ) {
    super(_latitude, _longitude);
  }

  get type(): PoiType {
    return this._type;
  }
  get id(): String {
    return this._id;
  }

  get name(): String {
    return this._name;
  }

  get address(): String {
    return this._address;
  }

  get email(): String {
    return this._email;
  }

  get facebook(): String {
    return this._facebook;
  }

  get phone(): String {
    return this._phone;
  }

  get website(): String {
    return this._website;
  }

  set address(address: String) {
    this._address = address;
  }

  set email(email: String) {
    this._email = email;
  }

  set facebook(facebook: String) {
    this._facebook = facebook;
  }

  set phone(phone: String) {
    this._phone = phone;
  }

  set website(website: String) {
    this._website = website;
  }

}

export class Serializable {
  public toJSON(): {} {
    const json: any = {};
    for ( const key of Object.keys(this) ) {
      if ( typeof this[key] !== 'undefined' && this[key] !== null ) {
        json[key] = this[key];
      }
    }
    return json;
  }
}

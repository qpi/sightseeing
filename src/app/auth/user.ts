import { FormControl, Validators, FormGroup } from '@angular/forms';
export class User {

  private _username$: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(15)
  ]);
  private _password$: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(15)
  ]);
  private _name$: FormControl = new FormControl('', [Validators.required, Validators.maxLength(20)]);
  private _email$: FormControl = new FormControl('', [Validators.required, Validators.email]);

  private _formGroup: FormGroup = new FormGroup({
    username : this._username$,
    password : this._password$,
    name: this._name$,
    email: this._email$
  });

  public getFormGroup(): FormGroup {
    return this._formGroup;
  }

  public getFormControl( field: string ): FormControl {
    return this['_' + field + '$'];
  }

  constructor() {}

  get username(): string {
    return this._username$.value;
  }

  set username(value: string) {
    this._username$.value.setValue(value);
  }

  get password(): string {
    return this._password$.value;
  }

  set password(value: string) {
    this._password$.value.setValue(value);
  }

  get name(): string {
    return this._name$.value;
  }

  set name(value: string) {
    this._name$.value.setValue(value);
  }

  get email(): string {
    return this._email$.value;
  }

  set email(value: string) {
    this._email$.value.setValue(value);
  }

  toJSON() {
    return {
      username: this.username,
      name: this.name,
      text: this.email
    };
  }
}

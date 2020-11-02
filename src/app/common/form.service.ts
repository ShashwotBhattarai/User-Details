import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  public form: FormGroup;
  public latestForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        ]),
      ],
      phoneNumber: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      occupation: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(30),
          Validators.maxLength(500),
        ]),
      ],
    });
  }

  public getForm(): FormGroup {

    return (this.form);
  }

  public resetForm(): void {
    this.form.reset();
  }
}

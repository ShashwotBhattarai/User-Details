
import { Component, OnInit } from '@angular/core';
import { FormService } from '../common/form.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  public registrationForm;

  public titleAlert = 'This Field Is Required';

  constructor(public formService: FormService) {

  }

  ngOnInit(): void {
    this.registrationForm = this.formService.getForm();
  }

  public saveData(): void {
    console.log('Saved data method called User Form:' + this.registrationForm);

    this.formService.resetForm();
  }

  public cancelMethod(): void {
    this.formService.resetForm();
  }
}

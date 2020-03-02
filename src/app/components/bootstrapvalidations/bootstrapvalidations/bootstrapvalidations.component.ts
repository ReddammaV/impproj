import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { Emailvalidator, NumericFieldValidator, MustMatchValidators } from 'src/app/core/validators/validations.validators';

@Component({
  selector: 'app-bootstrapvalidations',
  templateUrl: './bootstrapvalidations.component.html',
  styleUrls: ['./bootstrapvalidations.component.scss']
})
export class BootstrapvalidationsComponent implements OnInit {
  employeeForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setEmployeeForm();
  }

  setEmployeeForm() {
    console.log("Welcome employee form");
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required,
      Validators.maxLength(10), Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required,
      Validators.maxLength(10), Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Emailvalidator.validEmail])],
      mobile: ['', Validators.compose([Validators.required, NumericFieldValidator.validNumericField])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.required],
      employeeCode: ['', Validators.required],
      address: ['', Validators.required],
      contactNumber: ['', Validators.required],
    }, {
      validators: MustMatchValidators("password", "confirmPassword")
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.employeeForm.controls; }

  // form Submit
  onSubmit(formData: FormGroup) {
    this.submitted = true;
    console.log(formData.value);
    this.employeeForm.reset();
  }



}

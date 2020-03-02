import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { Emailvalidator, NumericFieldValidator, MustMatchValidators } from '../../../core/validators/validations.validators';

@Component({
  selector: 'app-materialvalidations',
  templateUrl: './materialvalidations.component.html',
  styleUrls: ['./materialvalidations.component.scss']
})
export class MaterialvalidationsComponent implements OnInit {
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


  // form Submit
  onSubmit(formData: FormGroup) {
    this.submitted = true;
    console.log(formData.value);
    this.employeeForm.reset();
  }

  // email
  getErrorEmail() {
    return this.employeeForm.get('email').hasError('required') ? 'Email is required' :
      this.employeeForm.get('email').hasError('validEmail') ? 'Email is Invalid' : '';
  }
  // mobile
  getMobile(){
    return this.employeeForm.get('mobile').hasError('required') ? 'Mobile Number is required' :
      this.employeeForm.get('mobile').hasError('validNumericField') ? 'Only Numbers are Allowed' : '';
  }
  // Confirm Password
  getConfirmPassword(){
    return this.employeeForm.get('confirmPassword').hasError('required') ? 'Confirm Password is required' :
      this.employeeForm.get('confirmPassword').hasError('mustMatch') ? 'Password must match' : '';
  }

}

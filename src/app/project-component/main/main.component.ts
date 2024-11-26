import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { AlertType } from 'src/app/shared/models/alert-type';
import { UtilService } from 'src/app/shared/services/util.service';
import Validation from 'src/app/shared/validation';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private utilService: UtilService,
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        email: ['', Validators.required],
        number: ['', this.validateNumber2()],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        cpassword: ['', Validators.required],
      }
    ),
    {
      validators: [Validation.match('password', 'cpassword')]
    }
  }


  submit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log('fullname', this.form.value.fullname);
    console.log('email', this.form.value.email);
  }

  reset(): void {
    this.utilService.alert('testing', AlertType.success);
  }

  /**
   * spinner
   */
  public spinner(): void {
    this.mainService.randomCall().subscribe((data)=>{
      console.log(data);
    })
  }

  // public spinner(): void {
  //   this.mainService.spinnerTest().subscribe((data)=>{
  //     console.log(data);
  //   })
  // }


  // validateNumber(control: AbstractControl): { [key: string]: any } | null {
  //   if (control.value === null || control.value.length === 0) {
  //     return null;
  //   } else {
  //     let x = parseInt(control.value, 10);
  //     if (x > 2020) {
  //       return { yearInvalid: true }
  //     } else {
  //       return null;
  //     }
  //   }
  // }

  public validateNumber2(): ValidatorFn {
    return (control: AbstractControl) : { [key: string]: any | null } => {
      if (control.value === null || control.value.length === 0) {
        return { yearInvalid: false };
      } else {
        let x = parseInt(control.value, 10);
        if (x > 2020) {
          return { yearInvalid: true }
        } else {
          return { yearInvalid: false };
        }
      }
    }
  }
  // public match(controlName: string, checkControlName: string): ValidatorFn {
  //   return (controls: AbstractControl) => {
  //     const control = controls.get(controlName);
  //     const checkControl = controls.get(checkControlName);

  //     if (checkControl?.errors && !checkControl.errors['matching']) {
  //       return null;
  //     }

  //     if (control?.value !== checkControl?.value) {
  //       controls?.get(checkControlName).setErrors({ matching: true });
  //       return { matching: true };
  //     } else {
  //       return null;
  //     }
  //   };
  // }

}

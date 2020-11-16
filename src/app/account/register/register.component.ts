import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticateService } from 'src/app/services/authenticate-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  erroMsg;
  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private account: AuthenticateService

  ) {
    this.form = fb.group({
      fullname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      mobileNumber: ['', { validators: Validators.required }],
    })

  }

  ngOnInit() {
  }

  register() {
    // this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
console.log(this.form.value)
    // this.loading = true;
    this.account.register(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data)
          // this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error => {
          console.log(error)
          this.erroMsg=error;
          // this.alertService.error(error);
          // this.loading = false;
        });
  }
}

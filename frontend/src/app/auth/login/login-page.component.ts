import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private auth: AuthService,
    private toast: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // this.router.navigate(['home']);
  }

  login() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({
        next: response => {
          console.log('estoy aqui')
          if (response['token']) {
            this.toast.success(`Bienvenido ${response['name']}`);
            this.router.navigate(['home/accion/list']);
          } else {
            this.toast.error(response['message']);
          }
        },
        error: error => {
          this.toast.error('Autenticación fallida');
        }
      });
    }
  }

  // On submit button click
  onSubmit() {}
  // On Forgot password link click
  onForgotPassword() {
    this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
  }
  // On registration link click
  onRegister() {
    this.router.navigate(['register'], { relativeTo: this.route.parent });
  }
}

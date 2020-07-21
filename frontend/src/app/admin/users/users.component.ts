import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { RolesService } from 'app/shared/services/roles.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { UsersService } from 'app/shared/services/users.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  formUser: FormGroup;
  roles$: Observable<any[]>;
  page=1;
  per_page=30;
  userToEdit$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private fb: FormBuilder,
    private rolesService: RolesService,
    private userService: UsersService,
    private toast: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.formUser = this.fb.group({
      id: [''],
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: [''],
      roles: ['1'],
      avatar: ['']
    });

    this.roles$ = this.rolesService.get();

    this.activatedRoute.params
      .pipe(
        switchMap(params => {
          if (params['id']) {
            return this.userService.show(params['id']);
          } else {
            return of(null);
          }
        })
      )
      .subscribe(user => {
        if (user) {
          this.userToEdit$.next(user);
          this.formUser.controls['id'].setValue(user['id']);
          this.formUser.controls['email'].setValue(user['email']);
          this.formUser.controls['name'].setValue(user['name']);
        }
      });
  }

  add() {
    if (this.formUser.valid) {
      this.userService.add(this.formUser.value).subscribe(response => {
        if (response) {
          this.toast.success(response['message']);
          this.router.navigate(['/admin/users/list']);
        } else {
          this.toast.error(JSON.stringify(response));
        }
      },(error)=>
      {
        let mensaje =error.error.errors;
        Object.keys(mensaje).forEach(key => {
          console.log(key)
          this.toast.error(mensaje[key][0]);
          console.log(mensaje[key][0])
         });
      });
    }
  }

  edit() {
    if (this.formUser.valid) {
      const id = this.formUser.controls['id'].value;
      this.userService.update(this.formUser.value).subscribe(response => {
        if (response) {
          this.toast.success(response['message']);
          this.router.navigate(['/admin/users/list']);
        } else {
          this.toast.error(JSON.stringify(response));
        }
      });
    }
    // console.log(this.formUser.value);
  }

  ngOnInit() {}
}

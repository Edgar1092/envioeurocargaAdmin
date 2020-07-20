import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/shared/services/users.service';
import { Routes, Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, filter, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$: Observable<any>;
  constructor(
    private userService: UsersService,
    private activeRouter: ActivatedRoute
  ) {
    this.getUserData();
  }

  ngOnInit() {}

  getUserData() {
    this.user$ = this.activeRouter.params.pipe(throttleTime(500)).pipe(
      filter(r => r === r),
      switchMap(r => {
         
        return this.userService.show(r['id']);
      })
    );
    console.log('esta',this.user$);
  }
}

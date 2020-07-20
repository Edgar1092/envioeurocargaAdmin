import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { UsersService } from 'app/shared/services/users.service';
import swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users$: Observable<any[]>;
  total = 0;
  p;
  itemsPerPage = '5';
  constructor(private userService: UsersService, private toast: ToastrService) {
    this.users$ = this.userService.users$;
    this.users$.subscribe(users => {
      if (users) {
        this.total = users.length;
      }
      
    });
 
  }

  ngOnInit() {
    this.userService.get();
  }

  delete(user: any) {
    const confirm = swal.fire({
      title: `Borrar al usuario ${user.first_name} ${user.last_name}`,
      text: 'Esta acción no se puede deshacer',
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Borrar',
      focusCancel: true
    });

    from(confirm).subscribe(r => {
      if (r['value']) {
        this.userService.delete(user.id).subscribe(response => {
          if (response) {
            this.toast.success(response['message']);
            this.userService.get();
          } else {
            this.toast.error(JSON.stringify(response));
          }
        });
      }
    });
  }

  // joinData(data: string[]): string {
  //   return data.map(o => o['name']).join(', ');
  // }

  onFilter(filterParams) {
    this.userService.get(filterParams);
  }
}

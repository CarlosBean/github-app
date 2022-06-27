import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IUser } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  value = '';
  results: IUser[] = [];

  constructor(
    private userService: UsersService, 
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  searchUser() {
    if (!this.value || this.value.length < 4) {
      this.snackBar.open('El texto de búsqueda debe ser mayor a 3 caracteres.', 'Error');
      return;
    }

    if (this.value === 'Teleperformance') {
      this.snackBar.open('Esta búsqueda no es valida.', 'Error');
      return;
    }

    this.userService.search(this.value).subscribe(res => {
      this.results = res;
    });
  }

  goToDetail(id: string | undefined) {
    if (!id) {
      this.snackBar.open('No es posible ver el detalle de este usuario.', 'Error');
      return;
    }

    this.router.navigate([`/users/${id}/view`]);
  }
}

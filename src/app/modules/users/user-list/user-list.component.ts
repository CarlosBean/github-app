import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnDestroy {
  value = '';
  results: IUser[] = [];
  subscription: Subscription;
  showHelpText = false;

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

    this.subscription = this.userService.search(this.value).subscribe(res => {
      this.results = res;
    }, err => {
      this.snackBar.open(err.error.message, 'Error');
    });
  }

  goToDetail(id: string | undefined) {
    if (!id) {
      this.snackBar.open('No es posible ver el detalle de este usuario.', 'Error');
      return;
    }

    this.router.navigate([`/users/${id}/view`]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

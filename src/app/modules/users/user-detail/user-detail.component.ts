import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user: IUser;
  results: any[];
  subscription: Subscription;

  constructor(
    private userService: UsersService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.subscription = this.userService.getDetail(id).subscribe(res => {
        this.user = res;
        this.results = [
          { name: 'Seguidores', value: res.followers },
          { name: 'Siguiendo', value: res.following },
          { name: 'Repositorios', value: res.public_repos },
        ];
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

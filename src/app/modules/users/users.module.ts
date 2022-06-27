import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routes';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    NgxChartsModule
  ]
})
export class UsersModule { }

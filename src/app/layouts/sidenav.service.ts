import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  listener = new Subject();
  
  navList = [
    { path: '/users', icon: 'person_outlined', label: 'Usuarios' },
  ];
}

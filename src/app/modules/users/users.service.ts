import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IUser, IUserQuery } from './user.model';

const BASE_URL = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http: HttpClient) { }

  search(text: string) {
    const mapper = (a: IUser) => ({ 
      id: a.id, 
      login: a.login, 
      avatar_url: a.avatar_url 
    });

    return this.http.get<IUserQuery>(`${BASE_URL}/search/users?q=${text}`).pipe(
      map(res => res.items.map(mapper))
    );
  }

  getDetail(username: string) {
    return this.http.get<IUser>(`${BASE_URL}/users/${username}`);
  }
}
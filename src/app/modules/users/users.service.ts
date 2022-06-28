import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { concatMap, map, mergeAll, mergeMap, tap, toArray } from 'rxjs';
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
      avatar_url: a.avatar_url,
      repos_url: a.repos_url
    });

    return this.http.get<IUserQuery>(`${BASE_URL}/search/users?q=${text}&per_page=10`).pipe(
      map(res => res.items.map(mapper)),
      mergeAll(),
      mergeMap(
        (data: any) => this.http.get(`${data.repos_url}?per_page=5`).pipe(
          map((repos: any) => ({ ...data, repos: repos.map((x: any) => x.name).join(', ') }))
        )),
      toArray(),
    );
  }

  getDetail(username: string) {
    return this.http.get<IUser>(`${BASE_URL}/users/${username}`);
  }
}
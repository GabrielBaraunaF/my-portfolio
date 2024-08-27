import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, switchMap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { inforepo } from '../model/inforepo';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private url = 'https://api.github.com/users/GabrielBaraunaF/repos';

  repositorioObsvable: any;
  users: any[] = [];

  constructor(private htppclient: HttpClient) {}

  getRepositories(): Observable<inforepo[]>  {
    return this.htppclient.get<any[]>(this.url).pipe(
      map((repos) => repos.filter((repo) => repo.name !='my-portfolio')),
      switchMap((inforepo) => {
        return forkJoin(
          inforepo.map((repo) =>
            this.htppclient.get<inforepo>(
              `https://raw.githubusercontent.com/GabrielBaraunaF/${repo.name}/master/inforepo.json`
            )
          )
        );
      })
    );
  }
}

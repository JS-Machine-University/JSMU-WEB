import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Module } from '../models/module';

@Injectable()
export class ModulesDataService {
  constructor(private http: HttpClient) {}

  public getModules(): Observable<Module[]> {
    return this.http.get<Module[]>('/assets/modules.json').pipe(
      map((json: any) => {
        return json || [];
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Module } from '../models/module';
import { ModulesDataService } from './modules-data.service';

@Injectable()
export class ModulesService {
  private modules: Module[] = [];

  public modules$: BehaviorSubject<Module[]> = new BehaviorSubject<Module[]>(
    this.modules
  );

  constructor(private modulesDataService: ModulesDataService) {
    this.modulesDataService
      .getModules()
      .pipe(take(1))
      .subscribe((modules: Module[]) => {
        this.modules = modules;
        this.modules$.next(this.modules);
      });
  }
}

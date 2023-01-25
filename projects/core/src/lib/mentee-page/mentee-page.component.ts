import { Component, OnInit } from '@angular/core';
import { Module } from '../models/module';
import { ModulesService } from '../services/modules.service';

@Component({
  selector: 'lib-mentee-page',
  templateUrl: './mentee-page.component.html',
  styleUrls: ['./mentee-page.component.scss'],
})
export class MenteePageComponent implements OnInit {
  public modules: Module[] = [];

  constructor(private modulesService: ModulesService) {}
  public getModules(): void {
    this.modulesService.modules$.subscribe((modules: Module[]) => {
      this.modules = modules;
    });
  }

  ngOnInit(): void {
    this.getModules();
  }

  public select(i: number): void {
    console.log(i);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Module } from '../models/module';

@Component({
  selector: 'lib-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
})
export class ModuleComponent implements OnInit {
  public selected: boolean = false;

  @Input()
  public module: Module | any;

  constructor() {}

  ngOnInit(): void {}
  public select(module: Module): void {
    if (module.id) {
      this.selected = !this.selected;
      
    }
  }
}

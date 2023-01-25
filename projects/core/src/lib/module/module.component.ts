import { Component, Input, OnInit } from '@angular/core';
import { Module } from "../models/module";

@Component({
  selector: 'lib-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  @Input()
  public module: Module | any;

  constructor() { }

  ngOnInit(): void {
  }

}

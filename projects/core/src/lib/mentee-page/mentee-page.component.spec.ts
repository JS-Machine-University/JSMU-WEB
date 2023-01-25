import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteePageComponent } from './mentee-page.component';

describe('MenteePageComponent', () => {
  let component: MenteePageComponent;
  let fixture: ComponentFixture<MenteePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenteePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenteePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

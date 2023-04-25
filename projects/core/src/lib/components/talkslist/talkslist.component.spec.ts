import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkslistComponent } from './talkslist.component';

describe('TalkslistComponent', () => {
  let component: TalkslistComponent;
  let fixture: ComponentFixture<TalkslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalkslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalkslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

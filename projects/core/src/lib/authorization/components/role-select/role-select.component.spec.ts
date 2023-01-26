import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

import { RoleSelectComponent } from './role-select.component';

describe('RoleSelectComponent', () => {
  let component: RoleSelectComponent;
  let fixture: ComponentFixture<RoleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoleSelectComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
				AngularFireDatabaseModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(RoleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

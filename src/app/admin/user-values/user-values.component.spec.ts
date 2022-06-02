import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserValuesComponent } from './user-values.component';

describe('UserValuesComponent', () => {
  let component: UserValuesComponent;
  let fixture: ComponentFixture<UserValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

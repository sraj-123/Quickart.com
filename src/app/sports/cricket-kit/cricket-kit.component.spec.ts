import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketKitComponent } from './cricket-kit.component';

describe('CricketKitComponent', () => {
  let component: CricketKitComponent;
  let fixture: ComponentFixture<CricketKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketKitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

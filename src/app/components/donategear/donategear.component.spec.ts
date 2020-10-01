import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonategearComponent } from './donategear.component';

describe('DonategearComponent', () => {
  let component: DonategearComponent;
  let fixture: ComponentFixture<DonategearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonategearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonategearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

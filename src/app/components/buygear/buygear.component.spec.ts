import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuygearComponent } from './buygear.component';

describe('BuygearComponent', () => {
  let component: BuygearComponent;
  let fixture: ComponentFixture<BuygearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuygearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuygearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarCardComponent } from './solar-card.component';

describe('SolarCardComponent', () => {
  let component: SolarCardComponent;
  let fixture: ComponentFixture<SolarCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

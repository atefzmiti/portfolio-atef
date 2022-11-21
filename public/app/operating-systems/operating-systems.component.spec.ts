import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingSystemsComponent } from './operating-systems.component';

describe('OperatingSystemsComponent', () => {
  let component: OperatingSystemsComponent;
  let fixture: ComponentFixture<OperatingSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatingSystemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatingSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

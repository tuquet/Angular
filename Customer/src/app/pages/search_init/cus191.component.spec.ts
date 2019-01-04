import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cus191Component } from './cus191.component';

describe('Cus191Component', () => {
  let component: Cus191Component;
  let fixture: ComponentFixture<Cus191Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cus191Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cus191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

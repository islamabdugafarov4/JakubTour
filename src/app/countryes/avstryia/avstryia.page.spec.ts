import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvstryiaPage } from './avstryia.page';

describe('AvstryiaPage', () => {
  let component: AvstryiaPage;
  let fixture: ComponentFixture<AvstryiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvstryiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvstryiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

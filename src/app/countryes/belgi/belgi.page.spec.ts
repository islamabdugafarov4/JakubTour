import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelgiPage } from './belgi.page';

describe('BelgiPage', () => {
  let component: BelgiPage;
  let fixture: ComponentFixture<BelgiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelgiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelgiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

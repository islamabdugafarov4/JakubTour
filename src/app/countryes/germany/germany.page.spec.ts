import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanyPage } from './germany.page';

describe('GermanyPage', () => {
  let component: GermanyPage;
  let fixture: ComponentFixture<GermanyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

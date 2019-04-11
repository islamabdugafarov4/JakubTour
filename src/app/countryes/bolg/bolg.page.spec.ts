import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BolgPage } from './bolg.page';

describe('BolgPage', () => {
  let component: BolgPage;
  let fixture: ComponentFixture<BolgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BolgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BolgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

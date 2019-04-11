import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrecPage } from './grec.page';

describe('GrecPage', () => {
  let component: GrecPage;
  let fixture: ComponentFixture<GrecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

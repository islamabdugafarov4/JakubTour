import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VengrPage } from './vengr.page';

describe('VengrPage', () => {
  let component: VengrPage;
  let fixture: ComponentFixture<VengrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VengrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VengrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

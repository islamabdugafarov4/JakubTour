import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliyaPage } from './australiya.page';

describe('AustraliyaPage', () => {
  let component: AustraliyaPage;
  let fixture: ComponentFixture<AustraliyaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustraliyaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliyaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

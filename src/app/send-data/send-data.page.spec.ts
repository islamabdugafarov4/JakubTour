import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDataPage } from './send-data.page';

describe('SendDataPage', () => {
  let component: SendDataPage;
  let fixture: ComponentFixture<SendDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

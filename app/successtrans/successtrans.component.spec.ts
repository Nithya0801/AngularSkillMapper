import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesstransComponent } from './successtrans.component';

describe('SuccesstransComponent', () => {
  let component: SuccesstransComponent;
  let fixture: ComponentFixture<SuccesstransComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesstransComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesstransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionAddComponent } from './accion-add.component';

describe('AccionAddComponent', () => {
  let component: AccionAddComponent;
  let fixture: ComponentFixture<AccionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

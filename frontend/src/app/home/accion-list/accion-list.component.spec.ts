import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionListComponent } from './accion-list.component';

describe('AccionListComponent', () => {
  let component: AccionListComponent;
  let fixture: ComponentFixture<AccionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

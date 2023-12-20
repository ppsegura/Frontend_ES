import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteUpdateComponent } from './docente-update.component';

describe('DocenteUpdateComponent', () => {
  let component: DocenteUpdateComponent;
  let fixture: ComponentFixture<DocenteUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocenteUpdateComponent]
    });
    fixture = TestBed.createComponent(DocenteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

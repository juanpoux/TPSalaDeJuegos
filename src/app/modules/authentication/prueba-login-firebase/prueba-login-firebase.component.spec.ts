import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaLoginFirebaseComponent } from './prueba-login-firebase.component';

describe('PruebaLoginFirebaseComponent', () => {
  let component: PruebaLoginFirebaseComponent;
  let fixture: ComponentFixture<PruebaLoginFirebaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaLoginFirebaseComponent]
    });
    fixture = TestBed.createComponent(PruebaLoginFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

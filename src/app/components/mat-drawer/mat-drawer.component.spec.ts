import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDrawerComponent } from './mat-drawer.component';

describe('MatDrawerComponent', () => {
  let component: MatDrawerComponent;
  let fixture: ComponentFixture<MatDrawerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatDrawerComponent]
    });
    fixture = TestBed.createComponent(MatDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

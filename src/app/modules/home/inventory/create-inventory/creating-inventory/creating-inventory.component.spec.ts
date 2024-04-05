import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingInventoryComponent } from './creating-inventory.component';

describe('CreatingInventoryComponent', () => {
  let component: CreatingInventoryComponent;
  let fixture: ComponentFixture<CreatingInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatingInventoryComponent]
    });
    fixture = TestBed.createComponent(CreatingInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

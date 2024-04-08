import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewObservationOfArticleAssignedToInventoryComponent } from './view-observation-of-article-assigned-to-inventory.component';

describe('ViewObservationOfArticleAssignedToInventoryComponent', () => {
  let component: ViewObservationOfArticleAssignedToInventoryComponent;
  let fixture: ComponentFixture<ViewObservationOfArticleAssignedToInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewObservationOfArticleAssignedToInventoryComponent]
    });
    fixture = TestBed.createComponent(ViewObservationOfArticleAssignedToInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArticleAssignedToInventoryComponent } from './view-article-assigned-to-inventory.component';

describe('ViewObservationOfArticleAssignedToInventoryComponent', () => {
  let component: ViewArticleAssignedToInventoryComponent;
  let fixture: ComponentFixture<ViewArticleAssignedToInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewArticleAssignedToInventoryComponent]
    });
    fixture = TestBed.createComponent(ViewArticleAssignedToInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

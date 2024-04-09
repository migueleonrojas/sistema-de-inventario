import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticleAssignedToInventoryComponent } from './edit-article-assigned-to-inventory.component';

describe('ViewObservationOfArticleAssignedToInventoryComponent', () => {
  let component: EditArticleAssignedToInventoryComponent;
  let fixture: ComponentFixture<EditArticleAssignedToInventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditArticleAssignedToInventoryComponent]
    });
    fixture = TestBed.createComponent(EditArticleAssignedToInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

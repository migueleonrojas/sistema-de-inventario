import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectingArticlesComponent } from './selecting-articles.component';

describe('SelectingArticlesComponent', () => {
  let component: SelectingArticlesComponent;
  let fixture: ComponentFixture<SelectingArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectingArticlesComponent]
    });
    fixture = TestBed.createComponent(SelectingArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

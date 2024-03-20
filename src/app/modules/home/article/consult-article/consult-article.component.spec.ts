import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultArticleComponent } from './consult-article.component';

describe('ConsultArticleComponent', () => {
  let component: ConsultArticleComponent;
  let fixture: ComponentFixture<ConsultArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultArticleComponent]
    });
    fixture = TestBed.createComponent(ConsultArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

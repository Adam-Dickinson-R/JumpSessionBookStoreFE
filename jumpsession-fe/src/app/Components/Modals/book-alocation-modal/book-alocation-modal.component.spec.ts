import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAlocationModalComponent } from './book-alocation-modal.component';

describe('BookAlocationModalComponent', () => {
  let component: BookAlocationModalComponent;
  let fixture: ComponentFixture<BookAlocationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookAlocationModalComponent]
    });
    fixture = TestBed.createComponent(BookAlocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

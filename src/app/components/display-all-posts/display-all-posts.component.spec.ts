import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllPostsComponent } from './display-all-posts.component';

describe('DisplayAllPostsComponent', () => {
  let component: DisplayAllPostsComponent;
  let fixture: ComponentFixture<DisplayAllPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAllPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayAllPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

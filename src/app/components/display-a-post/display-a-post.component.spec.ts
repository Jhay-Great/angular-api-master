import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAPostComponent } from './display-a-post.component';

describe('DisplayAPostComponent', () => {
  let component: DisplayAPostComponent;
  let fixture: ComponentFixture<DisplayAPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayAPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

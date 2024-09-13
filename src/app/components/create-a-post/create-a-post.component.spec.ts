import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAPostComponent } from './create-a-post.component';

describe('CreateAPostComponent', () => {
  let component: CreateAPostComponent;
  let fixture: ComponentFixture<CreateAPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

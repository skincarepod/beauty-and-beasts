import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogdetailsComponent } from './dogdetails.component';

describe('DogdetailsComponent', () => {
  let component: DogdetailsComponent;
  let fixture: ComponentFixture<DogdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DogdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { Location } from '@angular/common';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent
      ],
      providers: [provideRouter(routes)]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the home page title', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('h1').textContent).toContain('Beauty & Beasts');
  })

  it('should display the "Learn More" button', () => {
    const button = fixture.debugElement.query(By.css('button'));

    expect(button).toBeTruthy();
    expect(button.nativeElement.textContent).toContain("Learn More");
  })

  it('should route the "Learn More" button to the About page', async () => {
    const button = fixture.debugElement.nativeElement.querySelector('button a');

    button.click();

    await fixture.whenStable();

    fixture.detectChanges();
    expect(location.path()).toBe('/about');
  });
});

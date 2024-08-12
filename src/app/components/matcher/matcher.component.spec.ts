import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { Location } from '@angular/common';

import { MatcherComponent } from './matcher.component';

describe('MatcherComponent', () => {
  let component: MatcherComponent;
  let fixture: ComponentFixture<MatcherComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the matcher heading', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('h1').textContent).toContain('Dreaming');
  })

  it('should render the matcher page logo', () => {
    const images = fixture.debugElement.nativeElement.querySelectorAll('img');
    const matcherLogo = images[0].getAttribute('src');

    expect(matcherLogo).toContain('matcher-home-logo.png');
  })

  it('should render the selector buttons', () => {
    const buttonContainer = fixture.debugElement.nativeElement.querySelector('.matcher-selections-container');
    const buttons = buttonContainer.querySelectorAll('button');

    expect(buttons.length).toBe(5);
    expect(buttons[0].textContent).toBe('Combination Skin');
    expect(buttons[1].textContent).toBe('Dry Skin');
  })

  it('should display a photo that matches selected skin type', () => {
    const buttonContainer = fixture.debugElement.nativeElement.querySelector('.matcher-selections-container');
    const buttons = buttonContainer.querySelectorAll('button');
    const oilyButton = buttons[3];

    oilyButton.click();
    fixture.detectChanges();

    const oilyPhoto = fixture.debugElement.nativeElement.querySelector('#skin-type-image');

    expect(oilyPhoto.getAttribute('src')).toContain('oily-skin.png');
  })

  it('should display the "Find My Dog Match" button', () => {
    const buttonContainer = fixture.debugElement.nativeElement.querySelector('.matcher-router-button');
    const button = buttonContainer.querySelector('button');

    expect(button.textContent).toContain('Find');
  })

  it('should disable the "Find My Dog Match" button if no skin type is selected', () => {
    const buttonContainer = fixture.debugElement.nativeElement.querySelector('.matcher-router-button');
    const button = buttonContainer.querySelector('button');
    
    expect(button.disabled).toBeTrue();
  })

  it('should enable the "Find My Dog Match" button if a skin type is selected', () => {
    const matcherButtonContainer = fixture.debugElement.nativeElement.querySelector('.matcher-router-button');
    const matcherButton = matcherButtonContainer.querySelector('button');

    const buttonContainer = fixture.debugElement.nativeElement.querySelector('.matcher-selections-container');
    const buttons = buttonContainer.querySelectorAll('button');
    const sensitiveButton = buttons[4];

    sensitiveButton.click();
    fixture.detectChanges();

    expect(matcherButton.disabled).toBeFalse();
  })

  it('should route to the matcher results page', async () => {
    const buttonContainer = fixture.debugElement.nativeElement.querySelector('.matcher-router-button');
    const button = buttonContainer.querySelector('button');

    button.click()

    await fixture.whenStable();
    
    fixture.detectChanges();
    expect(location.path()).toBe('/matcher-results');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpLocatorLandingComponent } from './ip-locator-landing.component';

describe('IpLocatorLandingComponent', () => {
  let component: IpLocatorLandingComponent;
  let fixture: ComponentFixture<IpLocatorLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpLocatorLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpLocatorLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

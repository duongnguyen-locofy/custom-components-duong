import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCardComponent } from './listing-card.component';

describe('ListingCardComponent', () => {
  let component: ListingCardComponent;
  let fixture: ComponentFixture<ListingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display default listing data', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.property-name')?.textContent).toContain('Brightwoods Cabins');
    expect(compiled.querySelector('.property-address')?.textContent).toContain('Bridlepath, Ontario, Canada');
    expect(compiled.querySelector('.rating-value')?.textContent).toContain('4.9');
    expect(compiled.querySelector('.price-value')?.textContent).toContain('$658');
  });

  it('should show superhost tag when showSuperhostTag is true', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const superhostTag = compiled.querySelector('.superhost-tag');
    expect(superhostTag).toBeTruthy();
  });

  it('should hide superhost tag when showSuperhostTag is false', () => {
    component.showSuperhostTag = false;
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    const superhostTag = compiled.querySelector('.superhost-tag');
    expect(superhostTag).toBeFalsy();
  });

  it('should display custom data when provided', () => {
    component.showSuperhostTag = false;
    component.listingName = 'Test Property';
    component.listingAddress = 'Test Location';
    component.rating = '5.0';
    component.price = '$999';
    component.propertyImage = 'test-image.jpg';
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.property-name')?.textContent).toContain('Test Property');
    expect(compiled.querySelector('.property-address')?.textContent).toContain('Test Location');
    expect(compiled.querySelector('.rating-value')?.textContent).toContain('5.0');
    expect(compiled.querySelector('.price-value')?.textContent).toContain('$999');
  });
});

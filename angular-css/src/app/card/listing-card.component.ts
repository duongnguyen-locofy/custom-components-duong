import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listing-card.component.html',
  styleUrl: './listing-card.component.css'
})
export class ListingCardComponent {
  @Input() showSuperhostTag: boolean = true;
  @Input() listingName: string = 'Brightwoods Cabins';
  @Input() listingAddress: string = 'Bridlepath, Ontario, Canada';
  @Input() rating: string = '4.9';
  @Input() price: string = '$658';
  @Input() propertyImage: string = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop';
  @Input() className: string = '';
}

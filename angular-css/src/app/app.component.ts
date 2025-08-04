import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ButtonComponent } from './button/button.component';
import { ListingCardComponent } from './card/listing-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, ButtonComponent, ListingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'component1';

  // Sample data for the listing cards - now using individual properties
  listing1 = {
    showSuperhostTag: true,
    listingName: 'Brightwoods Cabins',
    listingAddress: 'Bridlepath, Ontario, Canada',
    rating: '4.9',
    price: '$658',
    propertyImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop'
  };

  listing2 = {
    showSuperhostTag: false,
    listingName: 'Modern Downtown Loft',
    listingAddress: 'Toronto, Ontario, Canada',
    rating: '4.7',
    price: '$289',
    propertyImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop'
  };

  listing3 = {
    showSuperhostTag: true,
    listingName: 'Cozy Mountain Retreat',
    listingAddress: 'Whistler, British Columbia, Canada',
    rating: '4.8',
    price: '$425',
    propertyImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
  };

  onClick() {
    console.log('Button clicked!');
  }
}

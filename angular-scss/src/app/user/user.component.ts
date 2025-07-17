import { Component, Input } from '@angular/core';

type Avatar = {
  size: 'large' | 'small';
  url: string;
};

enum Numbers {
  'Zero',
  'One',
  'Two',
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() name: string = 'My Name';
  @Input() age!: number;
  @Input() gender!: 'male' | 'female';
  @Input() num: Numbers = Numbers.One;
  @Input() admin: boolean | undefined;
  @Input() address!: { city: string; country: string };
  @Input() avatar!: Avatar;
}

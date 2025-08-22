import { Component, input } from '@angular/core';

@Component({
  selector: 'gif-item',
  imports: [],
  templateUrl: './gif-item.component.html',
  styleUrl: './gif-item.component.css'
})
export class GifItemComponent {

url = input.required<string>();

}

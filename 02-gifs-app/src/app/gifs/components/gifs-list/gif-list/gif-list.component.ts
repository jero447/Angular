import { Component, input } from '@angular/core';
import { GifItemComponent } from "../gif-item/gif-item.component";
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'gif-list',
  imports: [GifItemComponent],
  templateUrl: './gif-list.component.html',
  styleUrl: './gif-list.component.css'
})
export class GifListComponent {

  gifs = input.required<Gif[]>();


}

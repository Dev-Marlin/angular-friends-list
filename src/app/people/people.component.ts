import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})

export class PeopleComponent {
  @Input() name: string = "";
  @Input() isFav: boolean = false;
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteFav: EventEmitter<string> = new EventEmitter<string>();

  addToFavs(b: string)
  {
    this.addFav.emit(b);
  }

  deleteFromFavs(b: string)
  {
    this.deleteFav.emit(b);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  isInFav(name:string)
  {
    return this.favorites.indexOf(name) != -1
  }

  addFav(fav: string){
    if(this.favorites.indexOf(fav)==-1)
    {
      console.log(this.favorites);
      this.favorites.push(fav);
    }
  }

  deleteFav(fav: string){
    if(this.favorites.indexOf(fav)!=-1)
    {
      this.favorites = this.favorites.filter((p) => p !== fav);
    }
  }
}

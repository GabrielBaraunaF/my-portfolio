import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output() scrollintoview= new EventEmitter<string>();


  Scrollinto(target:string){
    console.log(target)
    this.scrollintoview.emit(target)
  }

}

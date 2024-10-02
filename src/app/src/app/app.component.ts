import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from "./components/projects/projects.component";
import { TechComponent } from "./components/tech/tech.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { PresentationComponent } from "./components/presentation/presentation.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectsComponent, TechComponent, AboutMeComponent, PresentationComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-portfolio';

  constructor(){}

  onScrollIntoView(elem: string) {
    console.log(elem)
    const element = document.querySelector(elem);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } 
  }
}

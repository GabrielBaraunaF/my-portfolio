import { Component } from '@angular/core';
import { TypingEffectComponent } from '../../typing-effect/typing-effect.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [TypingEffectComponent,],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

}

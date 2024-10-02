import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-typing-effect',
  standalone: true,
  imports: [],
  templateUrl: './typing-effect.component.html',
  styleUrl: './typing-effect.component.scss'
})
export class TypingEffectComponent implements OnInit {
  @Input() text: string = '';
  displayedText: string = '';
  index: number = 0;
  typingSpeed: number = 100; // milissegundos

  ngOnInit(): void {
    this.type();
}

type(): void {
    if (this.index < this.text.length) {
        this.displayedText += this.text.charAt(this.index);
        this.index++;
        setTimeout(() => this.type(), this.typingSpeed);
    } else {
        
        setTimeout(() => {
            this.reset();
            this.type();
        }, 1000); 
    }
}

reset(): void {
    this.displayedText = '';
    this.index = 0;
}
}

import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-repo-card',
  standalone: true,
  imports: [],
  templateUrl: './repo-card.component.html',
  styleUrl: './repo-card.component.scss'
})
export class RepoCardComponent {
  @Input() url!: string;
  @Input() description!: string;
  @Input() language!: string;
  @Input() name!: string;
  @Input() status!: string;
  @Input() repositoryLink!: string;
}

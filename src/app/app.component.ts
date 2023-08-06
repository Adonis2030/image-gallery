import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent],
})
export class AppComponent {
  title = 'image-gallery';
}

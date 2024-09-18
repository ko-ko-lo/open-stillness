import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExploreRoutinesComponent } from './components/explore-routines/explore-routines.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ExploreRoutinesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kokolo-yoga';
}

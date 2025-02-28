import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/components/footer/footer.component';
import { MainNavigationComponent } from './core/components/main-navigation/main-navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, MainNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'open-stillness';

  skipToContent(event: Event): void {
    event.preventDefault(); // Prevent Angular from intercepting the link
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus(); // Move focus to the main content area
    }
  }
}

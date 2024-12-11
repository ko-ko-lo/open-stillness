import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/components/footer/footer.component';
import { MainNavigationComponent } from './core/components/main-navigation/main-navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, MainNavigationComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'kokolo-yoga';
}

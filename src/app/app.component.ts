import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/components/footer/footer.component';
import { MainMenuComponent } from './core/components/main-menu/main-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, MainMenuComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'kokolo-yoga';
}

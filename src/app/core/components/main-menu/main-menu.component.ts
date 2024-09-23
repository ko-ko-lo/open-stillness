import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {
  menuOpen = false; // Track if the menu is open or not

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen; // Toggle the menu state
  }
}

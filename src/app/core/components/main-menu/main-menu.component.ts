import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent implements OnInit {
  isYogaRoutinePage: boolean = false;
  menuOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Detect the current route and update isYogaRoutinePage
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Check if the current route includes "/yoga-routines"
        this.isYogaRoutinePage = event.url.includes('/yoga-routines');
      });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }
  // Close the menu when navigating via the logo
  closeMenuAndNavigate(): void {
    this.menuOpen = false;
    this.router.navigate(['/']);
  }
}

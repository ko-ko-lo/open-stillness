import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isYogaRoutinePage: boolean = false;
  isMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events to detect when the route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Check if the current route includes "/yoga-routines"
        this.isYogaRoutinePage = event.url.includes('/yoga-routines');
      });

    // Existing logic for toggle functionality
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

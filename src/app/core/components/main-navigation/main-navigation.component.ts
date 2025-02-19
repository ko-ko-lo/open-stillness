import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ROUTES } from '../../../constants/routes';

@Component({
  selector: 'app-main-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.scss',
})
export class MainNavigationComponent implements OnInit {
  // Define submenus for each section
  subMenus: { [key: string]: { label: string; link: string }[] } = {
    meditation: [
      { label: 'Intro', link: ROUTES.MEDITATION.ROOT },
      {
        label: 'Library',
        link: ROUTES.MEDITATION.LIBRARY,
      },
    ],
    breathwork: [
      { label: 'Intro', link: ROUTES.BREATHWORK.ROOT },
      {
        label: 'Library',
        link: ROUTES.BREATHWORK.LIBRARY,
      },
      {
        label: 'Routines',
        link: ROUTES.BREATHWORK.ROUTINES_OVERVIEW,
      },
    ],
    'yin-style-yoga': [
      { label: 'Intro', link: ROUTES.YIN_STYLE_YOGA.ROOT },
      {
        label: 'Library',
        link: ROUTES.YIN_STYLE_YOGA.LIBRARY,
      },
      {
        label: 'Routines',
        link: ROUTES.YIN_STYLE_YOGA.ROUTINES_OVERVIEW,
      },
    ],
  };

  subMenuItems: { label: string; link: string }[] = [];
  menuItems: { label: string; link: string }[] = [];
  menuOpen = false;
  isRoutinePage = false; // Needed for breadcrumb logic

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch navigation menu items if not already set
    if (!this.menuItems.length) {
      this.http
        .get<{ label: string; link: string }[]>('data/navigation.json')
        .subscribe((data) => {
          this.menuItems = data;
        });
    }

    // Subscribe to route changes and update menu state
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateSubMenu(event.url);
      });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('no-scroll', this.menuOpen);
  }

  closeMenuAndNavigate(): void {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll'); // Re-enable scrolling
  }

  updateSubMenu(currentRoute: string): void {
    const section = currentRoute.split('/')[1]; // Extract "meditation", "breathwork", etc.

    // Check if the page is an individual routine page (for breadcrumb logic)
    this.isRoutinePage = currentRoute.includes('/routine/');

    // Hide submenu if on an individual routine page
    this.subMenuItems = this.isRoutinePage ? [] : this.subMenus[section] || [];
  }

  showSecondLevelNav(): boolean {
    return this.subMenuItems.length > 0;
  }
}

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-main-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.scss',
})
export class MainNavigationComponent implements OnInit {
  menuItems: any[] = []; // To store the menu data
  isRoutinePage: boolean = false; // Detect if the page is a yoga routine page
  menuOpen = false;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    if (this.menuItems.length === 0) {
      this.http.get<any[]>('data/navigation.json').subscribe((data) => {
        this.menuItems = data;
      });
    }

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isRoutinePage = event.url.includes('/routine/');
      });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen; // Toggle the menu open/close state
    document.body.classList.toggle('no-scroll', this.menuOpen); // Prevent body scrolling when menu is open
  }

  closeMenuAndNavigate(): void {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll'); // Re-enable scrolling
  }
}

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  routineName: string = ''; // Store the routine name for the breadcrumb
  currentSection: string = ''; // Current section (e.g., 'yin-style-yoga' or 'breathing')
  homeLink = '/';
  routinesLink = ''; // Adjust dynamically based on the section

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Determine the current section based on the route
    const urlSegments = this.router.url.split('/');
    this.currentSection = urlSegments[1]; // The first segment after the base URL

    // Set routinesLink dynamically
    this.routinesLink = `/${this.currentSection}/routines-overview`;

    // Get the current route's slug (if exists)
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');

      // If there is a slug, fetch the routine name from the correct JSON file
      if (slug) {
        const jsonFile =
          this.currentSection === 'yin-style-yoga'
            ? 'data/yoga-routines.json'
            : 'data/breathing-routines.json';

        this.http.get<any[]>(jsonFile).subscribe((data) => {
          const routine = data.find((r) => r.slug === slug);
          if (routine) {
            this.routineName = routine.name;
          }
        });
      }
    });
  }
}

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
  currentRoute: string = ''; // Store the current route
  homeLink = '/'; // Link to Home
  routinesLink = '/routines'; // Link to Routines overview

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Get the current route's slug (if exists)
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');

      // If there is a slug, fetch the routine name from the JSON file
      if (slug) {
        this.http.get<any[]>('data/yoga-routines.json').subscribe((data) => {
          const routine = data.find((r) => r.slug === slug);
          if (routine) {
            this.routineName = routine.name;
          }
        });
      }
    });
  }
}

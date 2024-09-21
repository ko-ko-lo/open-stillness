import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-yoga-routine',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  templateUrl: './yoga-routine.component.html',
  styleUrl: './yoga-routine.component.scss',
})
export class YogaRoutinesComponent implements OnInit {
  routineSlug: string | null = null;
  routineData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Get the slug from the URL
    this.routineSlug = this.route.snapshot.paramMap.get('slug');

    // Fetch the routine data from the JSON file
    this.http.get<any[]>('data/yoga-routines.json').subscribe((data) => {
      this.routineData = data.find(
        (routine) => routine.slug === this.routineSlug
      );
    });
  }
}

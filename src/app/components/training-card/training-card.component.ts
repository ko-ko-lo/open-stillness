import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteringComponent } from '../filtering/filtering.component';

@Component({
  selector: 'app-training-card',
  standalone: true,
  imports: [CommonModule, RouterModule, FilteringComponent],
  templateUrl: './training-card.component.html',
  styleUrl: './training-card.component.scss',
})
export class TrainingCardComponent implements OnInit {
  @Input() headingLevel: 'h2' | 'h3' = 'h2';
  @Input() routine?: any;
  @Input() showFilter: boolean = true;
  routines: any[] = [];
  filteredRoutines: any[] = [];
  selectedFilter: string = 'All Yoga Routines';
  filterOptions: string[] = [
    'All Yoga Routines',
    'Full Body',
    'Upper Body',
    'Back and Spine',
    'Hips and Legs',
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.routine) {
      this.filteredRoutines = [this.routine];
    } else {
      this.http.get<any[]>('data/yoga-routines.json').subscribe((data) => {
        this.routines = data;
        this.filteredRoutines = this.routines;
      });
    }
  }

  onFilterChange(selectedFilter: string): void {
    this.selectedFilter = selectedFilter;

    if (selectedFilter === 'All Yoga Routines') {
      this.filteredRoutines = this.routines;
    } else {
      this.filteredRoutines = this.routines.filter((routine) =>
        routine.targetAreas.includes(selectedFilter)
      );
    }
  }

  getWebpImage(imagePath: string | undefined): string | undefined {
    if (!imagePath) return undefined;
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}

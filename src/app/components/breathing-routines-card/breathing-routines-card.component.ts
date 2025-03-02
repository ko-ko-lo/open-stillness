import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteringComponent } from '../filtering/filtering.component';

@Component({
  selector: 'app-breathing-routines-card',
  standalone: true,
  imports: [CommonModule, RouterModule, FilteringComponent],
  templateUrl: './breathing-routines-card.component.html',
  styleUrl: './breathing-routines-card.component.scss',
})
export class BreathingRoutinesCardComponent implements OnInit {
  @Input() headingLevel: 'h2' | 'h3' = 'h2';
  @Input() routine?: any;
  @Input() showFilter: boolean = true;
  routineData: any[] = [];
  filteredRoutines = this.routine || [];

  selectedFilter: string = 'All Intensities';
  filterOptions: string[] = ['All Intensities', 'Easy', 'Medium'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (this.routine) {
      // If a single routine is passed, wrap it in an array for consistent use with *ngFor
      this.filteredRoutines = [this.routine];
    } else {
      this.http.get<any[]>('data/breathing-routines.json').subscribe((data) => {
        this.routineData = data;
        this.filteredRoutines = this.routineData; // Default to all routines
      });
    }
  }

  onFilterChange(selectedFilter: string): void {
    this.selectedFilter = selectedFilter;

    if (selectedFilter === 'All Intensities') {
      this.filteredRoutines = this.routineData; // Show all routines
    } else {
      this.filteredRoutines = this.routineData.filter((routine) =>
        routine.intensity?.includes(selectedFilter)
      );
    }
  }

  getWebpImage(imagePath: string | undefined): string | undefined {
    if (!imagePath) return undefined;
    return imagePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
  }
}

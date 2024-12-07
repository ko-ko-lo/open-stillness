import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  routineData: any[] = []; // Updated to use routineData consistently
  filteredRoutines: any[] = [];
  selectedFilter: string = 'All Intensities';
  filterOptions: string[] = ['All Intensities', 'Easy', 'Medium'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('data/breathing-routines.json').subscribe((data) => {
      this.routineData = data;
      this.filteredRoutines = this.routineData;
    });
  }

  // Handle filter changes
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

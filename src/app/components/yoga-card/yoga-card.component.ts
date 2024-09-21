import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilteringComponent } from '../filtering/filtering.component';

@Component({
  selector: 'app-yoga-card',
  templateUrl: './yoga-card.component.html',
  standalone: true,
  imports: [CommonModule, FilteringComponent],
  styleUrl: './yoga-card.component.scss',
})
export class YogaCardComponent implements OnInit {
  yogaPoses: any[] = []; // Stores all yoga poses
  filteredPoses: any[] = []; // Stores filtered yoga poses
  selectedFilter: string = 'All Target Areas';
  filterOptions: string[] = [
    'All Target Areas',
    'Back / Spine',
    'Chest',
    'Hips',
    'Legs',
    'Upper Body',
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch yoga poses from the JSON file
    this.http.get<any[]>('data/yoga-poses.json').subscribe((data) => {
      this.yogaPoses = data;
      this.filteredPoses = this.yogaPoses; // Initially show all poses
    });
  }

  // Handle filter changes
  onFilterChange(selectedFilter: string): void {
    this.selectedFilter = selectedFilter;

    if (selectedFilter === 'All Target Areas') {
      this.filteredPoses = this.yogaPoses; // Show all poses when "All Target Areas" is selected
    } else {
      this.filteredPoses = this.yogaPoses.filter((pose) =>
        pose.targetAreas.includes(selectedFilter)
      );
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilteringComponent } from '../../components/filtering/filtering.component';
import { YogaCardComponent } from '../../components/yoga-card/yoga-card.component';
import { YogaPoseService } from './../../yoga-pose.service';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, YogaCardComponent, FilteringComponent],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  yogaPoses: any[] = []; // All yoga poses
  filteredPoses: any[] = []; // Holds filtered yoga poses
  selectedFilter: string = 'All Target Areas'; // Tracks the currently selected filter

  constructor(private yogaPoseService: YogaPoseService) {}

  ngOnInit(): void {
    // Load all yoga poses from the service
    this.yogaPoseService.getYogaPoses().subscribe((data) => {
      this.yogaPoses = data;
      this.filteredPoses = this.yogaPoses; // Show all poses by default
    });
  }

  // Handle filter change emitted from the FilterComponent
  onFilterChange(selectedFilter: string): void {
    this.selectedFilter = selectedFilter; // Store the selected filter text
    if (selectedFilter === 'All Target Areas') {
      this.filteredPoses = this.yogaPoses; // Show all poses
    } else {
      // Filter poses based on the selected target area
      this.filteredPoses = this.yogaPoses.filter((pose) =>
        pose.targetAreas.includes(selectedFilter)
      );
    }
  }
}

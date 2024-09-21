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
  yogaPoses: any[] = [];
  filteredPoses: any[] = [];
  selectedFilter: string = 'All Target Areas'; // Default filter
  filterOptions: string[] = [
    'All Target Areas',
    'Back / Spine',
    'Chest',
    'Hips',
    'Legs',
    'Upper Body',
  ];

  constructor(private yogaPoseService: YogaPoseService) {}

  ngOnInit(): void {
    this.yogaPoseService.getYogaPoses().subscribe((data) => {
      this.yogaPoses = data;
      this.filteredPoses = this.yogaPoses;
    });
  }

  onFilterChange(selectedFilter: string): void {
    this.selectedFilter = selectedFilter;

    if (selectedFilter === 'All Target Areas') {
      this.filteredPoses = this.yogaPoses;
    } else {
      this.filteredPoses = this.yogaPoses.filter((pose) =>
        pose.targetAreas.includes(selectedFilter)
      );
    }
  }
}

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FilteringComponent } from '../../../components/filtering/filtering.component';
import { IntroSubpagesComponent } from '../../../components/intro-subpages/intro-subpages.component';
import { YogaCardComponent } from '../../../components/yoga-card/yoga-card.component';
import { TitleService } from '../../../services/title.service';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    CommonModule,
    YogaCardComponent,
    FilteringComponent,
    IntroSubpagesComponent,
  ],
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  title: string = 'Discover Yin-Style Yoga Poses for Your Practice';
  text: string =
    "Explore a variety of Yin-Style Yoga Poses. Hold each pose for as long as feels comfortable, which could be several minutes. Remember to take short breaks between poses to tune into your body. Avoid pushing yourself into discomfort, listen to your body's signals. If a pose is performed on both sides, a note will indicate this.";

  yogaPoses: any[] = [];
  filteredPoses: any[] = [];
  selectedFilter: string = 'All Target Areas';
  filterOptions: string[] = [
    'All Target Areas',
    'Spinal Movement',
    'Upper Body',
    'Lower Body',
  ];

  constructor(private http: HttpClient, private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setFullTitle('Library Yin-Style Yoga');

    this.http.get<any[]>('data/yoga-poses.json').subscribe((data) => {
      this.yogaPoses = data;
      this.filteredPoses = this.yogaPoses; // Initially show all poses
    });
  }

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

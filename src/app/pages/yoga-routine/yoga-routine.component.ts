import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { MeditationCardComponent } from '../../components/meditation-card/meditation-card.component';
import { YogaCardComponent } from '../../components/yoga-card/yoga-card.component';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-yoga-routine',
  standalone: true,
  imports: [
    CommonModule,
    BreadcrumbComponent,
    YogaCardComponent,
    MeditationCardComponent,
  ],
  templateUrl: './yoga-routine.component.html',
  styleUrl: './yoga-routine.component.scss',
})
export class YogaRoutinesComponent implements OnInit {
  routineSlug: string | null = null;
  routineData: any;
  yogaPoses: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private titleService: TitleService
  ) {}

  ngOnInit(): void {
    this.titleService.setFullTitle('Customized Routine');

    this.routineSlug = this.route.snapshot.paramMap.get('slug');

    this.http.get<any[]>('data/yoga-routines.json').subscribe((data) => {
      this.routineData = data.find(
        (routine) => routine.slug === this.routineSlug
      );
      if (this.routineData) {
        this.loadYogaPoses(this.routineData.poses);
      }
    });
  }
  loadYogaPoses(poses: string[]): void {
    this.http.get<any[]>('data/yoga-poses.json').subscribe((allPoses) => {
      // Filter the poses to get only the relevant ones for this routine
      this.yogaPoses = allPoses
        .filter((pose) => poses.includes(pose.name)) // First, filter only the relevant poses
        .sort((a, b) => poses.indexOf(a.name) - poses.indexOf(b.name)); // Then, sort by the order in the "poses" array
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { YogaCardComponent } from '../../components/yoga-card/yoga-card.component';
import { YogaPoseService } from './../../yoga-pose.service';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [CommonModule, YogaCardComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
})
export class LibraryComponent implements OnInit {
  yogaPoses: any[] = [];

  constructor(private yogaPoseService: YogaPoseService) {}

  ngOnInit(): void {
    this.yogaPoseService.getYogaPoses().subscribe((data) => {
      this.yogaPoses = data;
    });
  }
}

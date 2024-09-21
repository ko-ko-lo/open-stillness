import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filtering',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filtering.component.html',
  styleUrl: './filtering.component.scss',
})
export class FilteringComponent {
  @Input() filterOptions: string[] = []; // Input to pass filter options
  @Input() selectedFilter: string = ''; // Input for the currently selected filter
  @Output() filterChange = new EventEmitter<string>(); // Output to emit the selected filter

  onFilterSelect(filter: string): void {
    this.selectedFilter = filter;
    this.filterChange.emit(filter); // Emit the selected filter to the parent component
  }
}

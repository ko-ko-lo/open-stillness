import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtering',
  standalone: true,
  imports: [],
  templateUrl: './filtering.component.html',
  styleUrl: './filtering.component.scss',
})
export class FilteringComponent {
  selectedFilter: string = 'All Target Areas'; // Tracks the currently selected filter

  // Use EventEmitter to send the selected filter to the parent component
  @Output() filterChange = new EventEmitter<string>();

  onFilterSelect(filter: string) {
    this.selectedFilter = filter;
    this.filterChange.emit(this.selectedFilter); // Emit the selected filter to the parent
  }
}

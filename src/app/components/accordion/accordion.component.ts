import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
})
export class AccordionComponent {
  activeIndex: number | null = null;

  @Input() items: {
    title: string;
    content: { text?: string; list?: string[] }[];
  }[] = [];
  // @Input() items: { title: string; content: string[] }[] = [];
  @Input() title: string = '';
  @Input() backgroundClass: string = 'background-purple-light';
  @Input() hoverColor?: string;

  togglePanel(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private staticPart: string;

  constructor() {
    this.staticPart = document.title;
  }

  setFullTitle(dynamicPart: string): void {
    document.title = `${dynamicPart} | ${this.staticPart}`;
  }
}

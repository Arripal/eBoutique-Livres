import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './footer.component.html',
  styles: [],
})
export class FooterComponent {
  @Input() bgColor: string = 'bg-white';
}

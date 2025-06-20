import { Component, input } from '@angular/core';

@Component({
  selector: 'app-base-button',
  imports: [],
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.css',
})
export class BaseButtonComponent {
  type = input('button');
}

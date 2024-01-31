import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { InventoryComponent } from './inventory/inventory.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ActionComponent,
    InventoryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'idle-game';
}

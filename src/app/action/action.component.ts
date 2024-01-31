import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { InventoryComponent } from '../inventory/inventory.component';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    InventoryComponent
  ],
  templateUrl: './action.component.html',
  styleUrl: './action.component.css'
})
export class ActionComponent {
  constructor(private inventoryService: InventoryService) {}

  incrementGp() {
    this.inventoryService.incrementGp();
  }
}

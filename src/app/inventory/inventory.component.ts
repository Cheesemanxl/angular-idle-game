import { Component } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Item } from '../item';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  items: Item[] = this.inventoryService.getItems();
  displayedColumns: string[] = ['name', 'quantity', 'price', 'sellValue', 'category', 'buyButton', 'sellButton'];

  constructor(public inventoryService: InventoryService) {}
}

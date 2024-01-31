import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private goldPieces: number = 0;

  private items: Item[] = [
    { name: 'Wood', category: 'Crafting', quantity: 0, sellValue: 1, price: 1 },
    { name: 'Stone', category: 'Crafting', quantity: 0, sellValue: 1, price: 1 }
  ];

  getGp(): number {
    return this.goldPieces;
  }

  incrementGp() {
    this.goldPieces++;
  }

  getItems(): Item[] {
    return this.items;
  }
}


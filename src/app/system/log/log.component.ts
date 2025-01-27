import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { NgFor } from '@angular/common';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-log',
  imports: [TableModule, NgFor],
  templateUrl: './log.component.html',
})
export default class LogComponent {
  products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
  ];
  cols!: Column[];

  constructor() {
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' },
    ];
  }
}

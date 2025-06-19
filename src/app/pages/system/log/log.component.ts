import { Component, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';

interface Column {
	field: string;
	header: string;
}

@Component({
	selector: 'app-log',
	imports: [TableModule],
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

	@ViewChild('dt', { static: true }) dt!: Table;

	constructor() {
		this.cols = [
			{ field: 'code', header: 'Code' },
			{ field: 'name', header: 'Name' },
			{ field: 'category', header: 'Category' },
			{ field: 'quantity', header: 'Quantity' },
		];
		setTimeout(() => {
			console.log(this.dt, '------');
		}, 1000);
	}
}

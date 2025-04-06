import { Component, inject, input, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  formBuilder = inject(FormBuilder);
  searchItems = input([]);
  onSearch = output();

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    });
  }

  handleSearch() {
    if (this.searchForm.valid) {
      this.onSearch.emit(this.searchForm.value.search);
    }
  }

  handleReset() {
    this.searchForm.reset();
  }
}

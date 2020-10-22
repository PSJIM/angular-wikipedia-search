import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  results: [] = []

  constructor(
    private searchService: SearchService
    ) { }

  handleSearch(e) {
    this.searchService.getResults(e.target.value)
      .subscribe(data => this.results = data.query.search);
  }
    
  ngOnInit(): void {
  }
}

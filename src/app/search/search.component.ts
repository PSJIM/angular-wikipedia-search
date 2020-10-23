import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  results: Array<any> = []
  timeoutId: any = 0

  constructor(
    private searchService: SearchService
    ) { }

  handleSearch(e) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }

    if (e.target.value) {
      this.timeoutId = setTimeout(() => {
        this.searchService.getResults(e.target.value)
          .subscribe(data => this.results = data.query.search);
      }, 500);
    } else {
      setTimeout(() => {
        this.results = []
      }, 1000);
    }
  }
    
  ngOnInit(): void {
  }
}

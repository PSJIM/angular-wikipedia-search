import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private wikiApi = 'https://en.wikipedia.org/w/api.php'

  constructor(
    private http: HttpClient
  ) { }

  getResults(searchTerm: string): Observable<any> {
    let params = new HttpParams()
      .set('action', 'query')
      .set('list', 'search')
      .set('origin', '*')
      .set('format', 'json')
      .set('srsearch', searchTerm)
    return this.http.get(this.wikiApi, {params}).pipe(map(data => data))
  }
}

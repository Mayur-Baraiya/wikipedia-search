import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
    selector: 'wikipedia-search',
    template: `
    
      <div>
      <input #term type='text' (keyup)='search(term.value)' />
      <ul>
          <li *ngFor='let item of items'>{{item}}</li>
      </ul>
      </div>
    `

})

export class WikipediaSearchComponent {
    items: Array<string>;

    constructor(private _wikipediaservice: WikipediaService) {}

    search(term) {
        this._wikipediaservice.search(term).then(items => this.items = items);
    }
}

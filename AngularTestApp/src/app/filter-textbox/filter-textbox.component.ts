import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-filter-textbox',
  templateUrl: './filter-textbox.component.html',
  styleUrls: ['./filter-textbox.component.css']
})
export class FilterTextboxComponent implements OnInit {
  faSearch = faSearch;

  private _filter: string;

  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter);
  }

  @Output() changed = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}

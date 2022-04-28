import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges
    
    //realizar la busqueda despues de 3s al escribir
    .pipe( debounceTime(300) )
    .subscribe( value => this.searchEmitter.emit(value))
  }

  search = new FormControl('');

  //Salida del search
  @Output('search') searchEmitter = new EventEmitter<string>();
}

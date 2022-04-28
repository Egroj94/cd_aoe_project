import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CivilizationsService } from 'src/app/services/civilizations.service';
import { Civilizations } from "../../models/civilizations/civilizations"

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.scss']
})

export class CivilizationsComponent implements OnInit{

  // Search
  handleSearch(value: string){
    console.log(value);
    this.valor_filtro = value;
  }

  valor_filtro = '';
  
  /* API */
  civilizations: any;

  constructor(private civilization:CivilizationsService){}

  ngOnInit()
  {
    // Hacemos el llamado de la API declarada en el Service
    this.civilization.getCivilizations().subscribe
    (
      (res) => { this.civilizations = res; console.log(res); },
      (error) => { console.error(error) }
    ) 
  } 


}
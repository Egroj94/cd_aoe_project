import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CivilizationsService {

  // Ambiente local
  private API = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/5";

  //inicializamos la variable http en el constructor 
  constructor(public http:HttpClient){}

  //Obtenemos los valores de la API para retornarlos al componente "civilizations.component"
  public getCivilizations():Observable<any>{
    return this.http.get(this.API);
  }

}

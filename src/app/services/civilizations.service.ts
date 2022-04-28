import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CivilizationsService {

  //private API = "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations";
  private API = "api/v1/civilization/5";
  //private API = "api/v1/civilizations";

  constructor(public http:HttpClient){}

  //Obtenemos los valores de la API
  public getCivilizations():Observable<any>{
    return this.http.get(this.API);
  }

}

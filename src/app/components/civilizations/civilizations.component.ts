import { Component, OnInit } from '@angular/core';
import { CivilizationsService } from 'src/app/services/civilizations.service';

@Component({
  selector: 'app-civilizations',
  templateUrl: './civilizations.component.html',
  styleUrls: ['./civilizations.component.scss']
})

export class CivilizationsComponent {

  title = 'civilizationsArray';

  civilizations: any;

  constructor(private civilization:CivilizationsService){}

  ngOnInit()
  {
    this.civilization.getCivilizations().subscribe
    (
      (res) => 
      { 
        this.civilizations = res; 
        console.log(res);
      },
      (error) => 
      { 
        console.error(error) 
      }
    ) 
  }
}
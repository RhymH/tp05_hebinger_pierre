import { Component, OnInit } from '@angular/core';
import { Client } from "../modules/client";
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-formulaire-client',
  templateUrl: './formulaire-client.component.html',
  styleUrls: ['./formulaire-client.component.scss']
})
export class FormulaireClientComponent implements OnInit {

  public client: Client;

  constructor(private router: Router, private app: AppComponent) { }

  ngOnInit(): void {

    this.client = {
      nom: '',
      prenom: '',
      adresse: '',
      codepostal: undefined,
      ville: '',
      pays: '',
      tel: undefined,
      mail: '',
      passwd: '',
      passwdConf: '',
      civilite: ''
    }


  }

  save(model: Client, isValid: boolean){
    if(isValid){
      this.client = model;
      this.app.client = model;

      this.router.navigate(['recap']);
    }
    console.log(model, isValid);
  }

}

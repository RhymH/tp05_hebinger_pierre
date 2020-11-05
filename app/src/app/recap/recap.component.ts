import { Component, OnInit, Input } from '@angular/core';
import { Client } from "../modules/client";
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {

  client: Client;

  constructor(private app: AppComponent) {}

  ngOnInit(): void {
    this.client = this.app.client;
  }

}

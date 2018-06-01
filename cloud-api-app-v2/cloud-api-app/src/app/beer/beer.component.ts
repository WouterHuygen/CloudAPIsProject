import { Component, OnInit } from '@angular/core';
import { BeerService, RootObject } from '../core/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beers: RootObject;

  constructor(private service: BeerService) { }

  ngOnInit() {
    this.subscribeOnBeers();
  }

  subscribeOnBeers(){
    this.service.getAllBeers().subscribe(d =>{
      this.beers = d;
    });
  }
}

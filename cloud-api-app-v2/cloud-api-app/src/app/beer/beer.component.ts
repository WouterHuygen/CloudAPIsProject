import { Component, OnInit } from '@angular/core';
import { BeerService, RootObject } from '../core/beer.service';
import { OwnRootObject, OwnBeerService } from '../core/own-beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beers: RootObject;

  ownBeers: OwnRootObject;

  page: number = 1;

  constructor(private service: BeerService, private ownService: OwnBeerService) { }

  ngOnInit() {
    this.subscribeOnBeersPerPage();
    this.subscribeOnOwnBeers();
  }


  //Methods for beerservice
  subscribeOnBeers(){
    this.service.getAllBeers().subscribe(d =>{
      this.beers = d;
    });
  }
  subscribeOnBeersPerPage(){
    this.service.getBeersPerPage(this.page).subscribe(d =>{
      this.beers = d;
    });
  }
  //Methods for Own beerservice
  subscribeOnOwnBeers(){
    this.ownService.getAllOwnBeers().subscribe(c =>{
      this.ownBeers = c;
    });
  }
  
}

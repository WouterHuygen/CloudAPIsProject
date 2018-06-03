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
  newBeer: OwnRootObject=
  {
    name: "",
    image: "",
    type: "",
    description: "",
    alcoholPercentage: "",
  };
  _name: string;
  _image: string;
  _type: string;
  _description: string;
  _alcoholPercentage: string;

  text: string;
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
  addOwnBeer(){
    this.newBeer.name = this._name;
    this.newBeer.image = this._image;
    this.newBeer.type = this._type;
    this.newBeer.description = this._description;
    this.newBeer.alcoholPercentage = this._alcoholPercentage;
    this.ownService.addNewOwnBeer(this.newBeer).subscribe(c =>{
      this.newBeer = c;
    });
    console.log("test from addOwnBeer")
  }
  /*.subscribe(c =>{
    this.newBeer = c;
  });*/
/*{
  "id": 3,
  "name": "Jupiler",
  "image": "https://constructiveconsumption.files.wordpress.com/2013/11/stella-artois.jpg",
  "type": "Pale lager - Pilsner",
  "description": "Jupiler is a Belgian pilsner of 5.2%.",
  "alcoholPercentage": "5.2",
  "brewery": null
}*/

  public NextPage(){
    this.page ++;
    this.subscribeOnBeersPerPage();
  }
  public PreviousPage(){
    if (this.page > 1) {
      this.page --;
      this.subscribeOnBeersPerPage();
    }
  }
}


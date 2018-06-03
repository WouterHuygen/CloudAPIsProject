import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OwnBeerService {

  

  constructor(private http: HttpClient) { }

  getOwnBeerById(Id): Observable<OwnRootObject>{
    return this.http.get<OwnRootObject>(`http://localhost:5000/api/v1/beers/${Id}`);
  }

  getAllOwnBeers(): Observable<OwnRootObject>{
    return this.http.get<OwnRootObject>(`http://localhost:5000/api/v1/beers`);
  }

  addNewOwnBeer (Beer: OwnRootObject): Observable<OwnRootObject> {
    return this.http.post<OwnRootObject>("http://localhost:5000/api/v1/beers", Beer, httpOptions )
}
/*{
  "id": 1,
  "name": "Stella Artois",
  "image": "https://constructiveconsumption.files.wordpress.com/2013/11/stella-artois.jpg",
  "type": "Pale lager - Pilsner",
  "description": "Stella Artois is a Belgian pilsner of 5.2% which was first brewed by Brouwerij Artois (the Artois Brewery) in Leuven, Belgium, in 1926. Since 2008, a 4% ABV version is also sold in Britain, Ireland, Canada and New Zealand.",
  "alcoholPercentage": "5.2",
  "brewery": null
}*/
}
export interface PostRootObject{
  
}
export interface OwnRootObject {
  id?: number;
  name: string;
  image: string;
  type: string;
  description: string;
  alcoholPercentage: string;
  brewery?: any;
}


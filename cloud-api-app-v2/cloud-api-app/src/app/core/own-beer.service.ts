import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';

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

  addNewOwnBeer(): Observable<OwnRootObject>{
    //this.http.post<OwnRootObject>()
    return
  }
}


export interface OwnRootObject {
  id: number;
  name: string;
  image: string;
  type: string;
  description: string;
  alcoholPercentage: string;
  brewery?: any;
}


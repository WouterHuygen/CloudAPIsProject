import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseUserModel } from '../core/user.model';
import { Observable } from 'rxjs';
import * as firebase from "firebase/app";
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: FirebaseUserModel = new FirebaseUserModel(this.authService, this.af, this.router);

  constructor(
    public authService: AuthService,
    public af:AngularFireAuth,
    private router: Router,
  ) {}

  ngOnInit() {

  }
}

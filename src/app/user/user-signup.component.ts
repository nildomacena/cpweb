import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'cp-signup',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserSignup implements OnInit {
    user = { };
    items = FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {

    }

    ngOnInit() {
        
    }

}

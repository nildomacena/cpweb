import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class UserService {

  constructor(private af:AngularFire) { }

  signUp(user:any){
    this.af.auth.createUser(user);
    console.log(user);
  }
}

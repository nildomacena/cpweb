import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userLogged
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private af: AngularFire, private userService: UserService) {
    this.af.auth.subscribe(user => console.log("Usuário logado: ", user))
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'email': ['',Validators.required],
      'password': ['',Validators.required]
    });
  }

  onSubmit(){
    this.userService.signUp(this.myForm.value);
  }

}

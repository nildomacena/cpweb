import { Component, OnInit } from '@angular/core';
import { AngularFire,FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'cp-empenho',
  templateUrl: './empenho.component.html',
  styleUrls: ['./empenho.component.css']
})
export class EmpenhoComponent implements OnInit {

  items: FirebaseListObservable<any[]>
  itemObject: FirebaseObjectObservable<any>;
  texto: string;
  constructor(private af: AngularFire) {
    this.items = af.database.list('teste');
    this.items.subscribe(item => console.log(item));
  }

  ngOnInit() {

  }
  onSelectItem(key){
    this.itemObject = this.af.database.object('teste/'+key);
    this.itemObject.subscribe(item => {
      this.texto = item.texto;
      console.log("subscribe", this.texto);
    });
    console.log(this.itemObject);

  } 

  onSubmitText(text:string){
    this.items.push({texto: text});
  }

}

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProcessoService {
  listProcessos: FirebaseListObservable <any[]>;
  constructor(private af: AngularFire) {
    this.listProcessos = this.af.database.list('/processos');
  }
  
  saveProcesso(processo:any){ 
    this.listProcessos.push({processo});
  }

}

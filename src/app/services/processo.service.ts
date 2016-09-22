import { Injectable } from '@angular/core';

@Injectable()
export class ProcessoService {
  processos: any [ ] = [ ];
  constructor() { }

  saveProcesso(processo:any){
    this.processos.push(processo);
    console.log(this.processos);
  }

}

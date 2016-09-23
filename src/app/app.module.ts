import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent} from './app.component';
import { HeaderComponent } from './header';
import { ProcessoComponent} from './processo';
import { routing, appRoutingProviders } from './app.routing';
import { NotaFiscalComponent} from './nota-fiscal';
import { EmpenhoComponent} from './empenho';
import { ProcessoService} from './services/processo.service';
import { AngularFireModule } from 'angularfire2';
import { UserComponent } from './user/user.component';



export const firebaseConfig = {
    apiKey: "AIzaSyCgIyt1k90LdrVilfdsk_nx6rpE7_aQGRo",
    authDomain: "cpweb-dc825.firebaseapp.com",
    databaseURL: "https://cpweb-dc825.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "651869103107"
  };

@NgModule({
    declarations: [AppComponent, HeaderComponent, ProcessoComponent, NotaFiscalComponent, EmpenhoComponent, EmpenhoComponent, NotaFiscalComponent, ProcessoComponent, UserComponent],
    imports: [
        BrowserModule, 
        FormsModule, 
        ReactiveFormsModule, 
        routing, 
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    bootstrap: [AppComponent],
    providers: [appRoutingProviders, ProcessoService]
})

export class AppModule{}
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




@NgModule({
    declarations: [AppComponent, HeaderComponent, ProcessoComponent, NotaFiscalComponent, EmpenhoComponent, EmpenhoComponent, NotaFiscalComponent, ProcessoComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, routing],
    bootstrap: [AppComponent],
    providers: [appRoutingProviders, ProcessoService]
})

export class AppModule{}
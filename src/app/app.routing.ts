import { ModuleWithProviders}  from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProcessoComponent}    from './processo';
import { NotaFiscalComponent}  from './nota-fiscal';
import { EmpenhoComponent}     from './empenho';
import { UserComponent}           from './user';


const appRoutes: Routes = [ 
    {path: '', component: ProcessoComponent},
    {path: 'processo', component: ProcessoComponent},
    {path: 'empenho', component: EmpenhoComponent},
    {path: 'notafiscal', component: NotaFiscalComponent},
    {path: 'user', component: UserComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
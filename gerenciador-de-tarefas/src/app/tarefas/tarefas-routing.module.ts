import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarTarefasComponent } from "./listar/listar-tarefas.component";

export const routes: Routes = [
    {
        path: 'tarefas', redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar', component: ListarTarefasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TarefasRoutingModule { }
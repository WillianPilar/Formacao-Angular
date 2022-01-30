import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarTarefaComponent } from "./cadastrar/cadastrar-tarefa.component";
import { EditarTarefaComponent } from "./editar/editar-tarefa.component";
import { ListarTarefasComponent } from "./listar/listar-tarefas.component";

export const routes: Routes = [
    { path: 'tarefas', redirectTo: 'tarefas/listar' },
    { path: 'tarefas/listar', component: ListarTarefasComponent },
    { path: 'tarefas/cadastrar', component: CadastrarTarefaComponent },
    { path: 'tarefas/editar/:id', component: EditarTarefaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TarefasRoutingModule { }
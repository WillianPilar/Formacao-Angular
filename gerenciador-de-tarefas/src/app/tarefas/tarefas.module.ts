import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared/tarefa.service';
import { ListarTarefasComponent } from './listar/listar-tarefas.component';
import { TarefasRoutingModule } from './tarefas-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarTarefasComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    ListarTarefasComponent
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }

import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared/tarefa.service';
import { Tarefa } from '../shared/tarefas.model';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas : Tarefa[];

  constructor( private tarefaService : TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  /*$event - Onjeto do JS com os eventos da view
    *Por ser um campo de texto ao clicar a tela atualiza
    *para remover isso precisa capturar esse evento e tratar "$event.preventDefault();"
  */
  remover($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
    if (confirm("Deseja remover a tarefa " + tarefa.nome + "?")) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa): void{
    console.log("OII");
    if (confirm("Deseja alterar o status da tarefa '" + tarefa.nome +"'?")) {
      console.log(this.tarefas);
      this.tarefaService.alterarStatus(tarefa.id);
      tarefa.concluida = true;
      this.tarefas = this.listarTodos();
      console.log(this.tarefas);
      console.log(this.tarefas[0].concluida);
    }
  }

}

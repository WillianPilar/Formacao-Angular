import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { ListarTarefasComponent } from './tarefa/listar-tarefas/listar-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TarefasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

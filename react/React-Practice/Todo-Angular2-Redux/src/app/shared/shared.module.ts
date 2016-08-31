import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { VisibleTodosPipe } from './pipes/visibletodos.pipe';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    VisibleTodosPipe
  ],
  exports: [
    CommonModule, FormsModule, HttpModule, VisibleTodosPipe
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}

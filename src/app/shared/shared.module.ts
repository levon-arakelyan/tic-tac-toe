import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TextInputComponent } from "./components/text-input/text-input.component";
import { ParentFormDirective } from "./directives/parent-form/parent-form.directive";

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    TextInputComponent,
    ParentFormDirective
  ],
  exports: [
    TextInputComponent,
    ParentFormDirective
  ]
})
export class SharedModule { }
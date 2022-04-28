import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/footer/header/header.component';
import { ColorDirectiveDirective } from './directives/color.directive.directive';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ColorDirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ColorDirectiveDirective
  ]
})
export class SharedModule { }

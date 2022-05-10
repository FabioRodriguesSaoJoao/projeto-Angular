import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/footer/header/header.component';
import { ColorDirectiveDirective } from './directives/color.directive.directive';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ColorDirectiveDirective,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ColorDirectiveDirective,

  ]
})
export class SharedModule { }

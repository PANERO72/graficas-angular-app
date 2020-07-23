import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarraComponent } from './components/barra/barra.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';
import { PieComponent } from './components/pie/pie.component';
import { PolarComponent } from './components/polar/polar.component';
import { BubbleComponent } from './components/bubble/bubble.component';
import { ScatterComponent } from './components/scatter/scatter.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    NavbarComponent,
    BarraComponent,
    DonaComponent,
    RadarComponent,
    PieComponent,
    PolarComponent,
    BubbleComponent,
    ScatterComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
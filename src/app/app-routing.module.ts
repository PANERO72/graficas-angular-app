import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineaComponent } from "./components/linea/linea.component";
import { BarraComponent } from './components/barra/barra.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from "./components/radar/radar.component";
import { PieComponent } from "./components/pie/pie.component";
import { PolarComponent } from "./components/polar/polar.component";
import { BubbleComponent } from "./components/bubble/bubble.component";
import { ScatterComponent } from "./components/scatter/scatter.component";
import { DynamicComponent } from "./components/dynamic/dynamic.component";

const routes: Routes = [
  { path: 'line-chart', component: LineaComponent, data: { titulo: 'Gráfica de Línea' } },
  { path: 'bar-chart', component: BarraComponent, data: { titulo: 'Gráfica de Barras'} },
  { path: 'doughnut-chart', component: DonaComponent, data: { titulo: 'Gráfica de Dona'}},
  { path: 'radar-chart', component: RadarComponent, data: { titulo: 'Gráfica de Radar'}},
  { path: 'pie-chart', component: PieComponent, data: { titulo: 'Gráfica Circular'}},
  { path: 'polar-chart', component: PolarComponent, data: { titulo: 'Gráfica de Área Polar'}},
  { path: 'bubble-chart', component: BubbleComponent, data: { titulo: 'Gráfica de Burbujas'}},
  { path: 'scatter-chart', component: ScatterComponent, data: { titulo: 'Gráfica de Dispersión'}},
  { path: 'dynamic-chart', component: DynamicComponent, data: { titulo: 'Gráfica Dinámica'}},
  { path: '**', pathMatch: 'full', redirectTo: '/line-chart' },
  { path: '', pathMatch: 'full', redirectTo: '/line-chart' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
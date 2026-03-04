import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./core/components/sidebar/sidebar";
import { SeoService } from './core/services/seo.service';
import { routeAnimations } from './core/animations/route.animations';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [routeAnimations]
})
export class App {
  protected readonly title = signal('Wilson Oliveira');
  constructor(private seoService: SeoService) {
    this.seoService.initTags()
  }
  prepareRoute(outlet: any) {
    return outlet?.activatedRouteData?.['animation'];
  }

}

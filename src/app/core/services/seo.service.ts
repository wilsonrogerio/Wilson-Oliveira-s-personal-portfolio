import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  initTags() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap((route) => route.data)
    ).subscribe((data) => {
      const title = data['title'] || 'Portfólio Wilson Oliveira';
      const description = data['description'] || 'Desenvolvedor Full Stack';

      // Atualiza o Título
      this.titleService.setTitle(title);

      // Atualiza Meta Tags (updateTag evita duplicatas no SSR)
      this.metaService.updateTag({ name: 'description', content: description });
      this.metaService.updateTag({ property: 'og:title', content: title });
      this.metaService.updateTag({ property: 'og:description', content: description });

      // Se tiver uma imagem padrão de compartilhamento:
      this.metaService.updateTag({ property: 'og:image', content: 'assets/og-image.png' });
    });
  }
}

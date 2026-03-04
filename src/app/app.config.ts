import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {
  LucideAngularModule, House, User, Mail, TvMinimal, ArrowDownToLine, Database, ChevronsLeftRight,
  GitBranch, Dribbble, Layers, Container, Zap, MapPin, Globe, Bug, GraduationCap, Clock, BadgeCheck,
  Linkedin, Github

} from 'lucide-angular';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    importProvidersFrom(
      LucideAngularModule.pick({
        House, User, Mail, TvMinimal, ArrowDownToLine, Database, ChevronsLeftRight,
        GitBranch, Dribbble, Layers, Container, Zap, MapPin, Globe, Bug, GraduationCap,
        Clock, BadgeCheck, Linkedin, Github
      })
    )
  ]
};

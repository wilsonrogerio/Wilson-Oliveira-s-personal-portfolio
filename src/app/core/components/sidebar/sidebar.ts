import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, CommonModule, LucideAngularModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menu = [
    { label: 'Início', icon: 'home' },
    { label: 'Projetos', icon: 'layout' },
    { label: 'Sobre', icon: 'user' },
    { label: 'Contato', icon: 'mail' }
  ];

  social = [
    { icon: 'github', link: '#' },
    { icon: 'globe', link: '#' },
    { icon: 'mail', link: '#' }
  ];
}

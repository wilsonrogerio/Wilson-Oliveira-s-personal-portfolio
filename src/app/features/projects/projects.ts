import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  imports: [FormsModule, CommonModule, LucideAngularModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      imgUrl: '/portifolio.png',
      category: "web",
      title: "Portifolio Angular SSR",
      tecName: ['Angular', 'Scss', 'Typescript'],
      descript: 'Aplicação web desenvolvida com Angular, pagina de portifolio dinamica aplicando os conceitos modernos de Angular.',
      linkRepository: 'https://github.com/wilsonrogerio/Portifolio-Pessoal'
    },
    {
      imgUrl: '/nest-api.png',
      category: "backend",
      title: "Api Backend NestJS",
      tecName: ['Node.Js', 'NestJS', 'Typescript'],
      descript: 'Api REST desenvolvida com NestJS, um framework Node.js Typescript progressivo para construção de aplicações eficientes e escaláveis.',
      linkRepository: 'https://github.com/wilsonrogerio/API-REST-NESTJS'
    },
    {
      imgUrl: '/get-pet.png',
      category: "fullstack",
      title: "Aplicacao de Adocao de Pets",
      tecName: ['Angular', 'Node.Js', 'MongoBD'],
      descript: 'Api REST desenvolvida com NodeJS e Express, para construção de uma aplicacao Pet Adoption full stack MVC.',
      linkRepository: 'https://github.com/wilsonrogerio/MVC-Angular-Node'
    },
    {
      imgUrl: '/social-dev.png',
      category: "fullstack",
      title: "Rede Social para Devs",
      tecName: ['Angular', 'NestJS', 'Sqlite'],
      descript: 'Aplicação full stack desenvolvida com Angular no front-end e NestJS no back-end, seguindo a arquitetura MVC.',
      linkRepository: 'https://github.com/wilsonrogerio/Social-Dev'
    },
    {
      imgUrl: '/angular-tailwind.png',
      category: "web",
      title: "Pagina registro de lugares",
      tecName: ['Angular', 'Tailwind', 'Typescript'],
      descript: 'Um projeto moderno de aplicação web desenvolvido com Angular 20 e Tailwind CSS.',
      linkRepository: 'https://github.com/wilsonrogerio/Angular-Tailwind'
    },
    {
      imgUrl: '/reaction-time.png',
      category: "web",
      title: "Pagina de teste de reflexo",
      tecName: ['Html', 'css', 'JavaScript'],
      descript: 'Um projeto de mini game de teste de reflexo com media de resultados',
      linkRepository: 'https://reaction-pro-time.vercel.app/'
    }
  ]

}

import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sidebar } from "../../core/components/sidebar/sidebar";

@Component({
  selector: 'app-projects',
  imports: [FormsModule, CommonModule,],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  searchQuery = signal('');

  projects = signal([
    { id: 1, title: 'E-commerce API', desc: 'Node.js & MongoDB' },
    { id: 2, title: 'Dashboard Pro', desc: 'Angular & NgRx' },
    { id: 3, title: 'App Mobile', desc: 'Ionic Framework' },
  ]);

  filteredProjects = computed(() => {
    return this.projects().filter(p =>
      p.title.toLowerCase().includes(this.searchQuery().toLowerCase())
    );
  });
}

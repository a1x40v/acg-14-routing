import { Routes } from '@angular/router';

import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { TasksComponent } from './tasks/tasks.component';

export const routes: Routes = [
  {
    path: '', // <domain>/
    component: NoTaskComponent,
  },
  {
    path: 'tasks', // <domain>/tasks
    component: TasksComponent,
  },
];

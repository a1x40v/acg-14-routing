import {
  CanMatchFn,
  RedirectCommand,
  Route,
  Router,
  Routes,
  UrlSegment,
} from '@angular/router';
import { inject } from '@angular/core';

import { userRoutes } from './users/users.routes';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';

const dummyCanMatch: CanMatchFn = (route: Route, segments: UrlSegment[]) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random() < 0.5;
  if (shouldGetAccess) {
    return true;
  }

  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '', // <domain>/
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId', // <domain>/users/<uid>
    component: UserTasksComponent,
    children: userRoutes,
    canMatch: [dummyCanMatch],
    data: {
      message: 'Hello!',
    },
    resolve: {
      userName: resolveUserName,
    },
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

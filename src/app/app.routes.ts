import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Programs } from './programs/programs';
import { Contact } from './contact/contact';
import { Donate } from './donate/donate';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'programs', component: Programs },
  { path: 'contact', component: Contact },
  { path: 'donate', component: Donate }
];

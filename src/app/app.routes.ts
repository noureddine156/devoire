import { InscriptionComponent } from './inscription/inscription.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { ConnexionComponent } from './connexion/connexion.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

export const routes: Routes = [
   { path:'acceuil',
    component:AcceuilComponent
   },

   { 
    path:'connexion',
    component:ConnexionComponent
},
   { 
    path:'inscription',
    component:InscriptionComponent
}
];

import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import { InscriptionComponent } from "./inscription/inscription.component";
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { ConnexionComponent } from "./connexion/connexion.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, InscriptionComponent, AcceuilComponent, ConnexionComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dsi22';
}

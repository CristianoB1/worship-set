import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { MusicasService } from './musicas/musicas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('worshipset');

  // constructor(private musicasService: MusicasService) {
  //   this.musicasService.GetMusicas();

  // }
  
}

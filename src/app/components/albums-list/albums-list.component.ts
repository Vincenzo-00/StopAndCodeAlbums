import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Albums } from '../../models/albums';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.css'
})
export class AlbumsListComponent implements OnInit {
  albums: Albums[] = [];

  constructor(public albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(dati => {
      this.albums = dati
    })
  }
}

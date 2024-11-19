import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Photos } from '../../models/photos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrl: './photos-list.component.css'
})
export class PhotosListComponent implements OnInit {

  photos: Photos[] = [];

  albumId?: string

  constructor(private route: ActivatedRoute, private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id')!

    if (this.albumId) {
      this.albumService.getPhotos(this.albumId).subscribe(dati => {
        this.photos = dati
      })

    }

  }




}

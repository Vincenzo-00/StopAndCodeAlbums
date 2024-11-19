import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from '../models/albums';
import { Photos } from '../models/photos';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albums: Albums[] = [];

  albumId: string = "";

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>("https://jsonplaceholder.typicode.com/albums");
  }

  getPhotos(albumId: string): Observable<Photos[]> {
    return this.http.get<Photos[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
  }
}

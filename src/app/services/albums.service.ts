import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from '../models/albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albums: Albums[] = [];

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Albums[]> {
    return this.http.get<Albums[]>("https://jsonplaceholder.typicode.com/albums");
  }
}

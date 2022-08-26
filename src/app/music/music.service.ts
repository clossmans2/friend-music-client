import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, of } from 'rxjs';

import { Song, SongDTO } from './song';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private musicUrl = `${environment.apiUrl}/Music`;
  //private musicUrl = 'api/Music';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.musicUrl, this.httpOptions);   
  }

  getSong(id: number): Observable<Song> {
    let url = `${this.musicUrl}/${id}`;
    return this.http.get<Song>(url, this.httpOptions);
  }

  createSong(song: Song): Observable<Song> {
    return this.http.post<Song>(this.musicUrl, song, this.httpOptions);
  }

  updateSong(song: Song): Observable<Song> {
    let url = `${this.musicUrl}/${song.id}`;
    return this.http.put<Song>(url, song, this.httpOptions);
  }

  deleteSong(id: number): Observable<Song> {
    return this.http.delete<Song>(`${this.musicUrl}/${id}`, this.httpOptions);
  }

  // errorHandler(error: any, caught: Observable<Song[]>) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //     return throwError(() => new Error(errorMessage));
  //   }
  // }
}

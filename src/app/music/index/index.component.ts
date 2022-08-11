import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Song } from '../song';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  songs: Song[] = [];

  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.retrieveSongs();
  }

  retrieveSongs() : void {
    this.musicService.getSongs().subscribe(songs => this.songs = songs);
  }

}

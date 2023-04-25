import { Component, OnInit } from '@angular/core';
import octaves from 'src/app/models/msxsound/octaves';

@Component({
  selector: 'app-notes-repository',
  templateUrl: './notes-repository.component.html',
  styleUrls: ['./notes-repository.component.scss']
})
export class NotesRepositoryComponent implements OnInit {

  public numOctaves: number = 8;
  public octaves: object[];

  constructor() {
     this.octaves = octaves;
     console.log(this.octaves.length);
  }


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import Octaves from 'src/app/models/msxsound/Octaves';

@Component({
  selector: 'app-notes-repository',
  templateUrl: './notes-repository.component.html',
  styleUrls: ['./notes-repository.component.scss']
})
export class NotesRepositoryComponent implements OnInit {

  public numOctaves: number = 8;
  public octaves: any[] = Octaves.octaves;

  constructor() {
    console.log(this.octaves.length);
  }


  ngOnInit(): void {
  }

}

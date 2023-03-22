import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character, Episode } from 'src/app/core/interfaces';

declare var $:any

@Component({
  selector: 'app-view-episode',
  templateUrl: './view-episode.component.html',
  styleUrls: ['./view-episode.component.css']
})
export class ViewEpisodeComponent implements OnInit{
  @Input() imgCharacter: string = ""
  @Input() nameCharacter: string  = ""
  @Input() ViewEpisode: Array<Episode>=[]


  ngOnInit(){ }

  closeModal() {
    $('#view-episode').modal('hide')
  }


}


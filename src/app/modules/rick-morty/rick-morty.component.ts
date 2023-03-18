import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Character, Gender, Status } from '../../interfaces';
import { ReqRickMortyService } from 'src/app/services/Request/req-rick-morty.service';
import  {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap'

declare var $: any;
@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RickMortyComponent implements OnInit {
  id: string = "";
  name: string = "";
  status: Status = 'unknown';
  gender: Gender = 'unknown';
  Pages: number = 1
  ListStatus: Array<{field:Status}> = [{field:'Alive'}, {field:'Dead'},{field:'unknown'}]
  ListGender: Array<{field:Gender}> = [{field:'Female'}, {field:'Male'},{field:'unknown'}]
  ListCharacters: Array<Character> = []


  constructor(private RickMorty: ReqRickMortyService) { }

  ngOnInit() {
    this.RickMorty.LoadCharacter()
      .subscribe((resp) => {
        this.ListCharacters.push(...resp)
      })
  }

  onScroll() {

  }

  loadById(Id: number) {
    console.log(Id);

  }

  newCharacter(): void {
    console.log()
  }

  viewEpisodes(Id: number): void {
    console.log(Id)
  }
  /*************** BUTTON NUEVO *****************/
  New() {
    this.id = ""
    this.name = ""
    this.status = 'unknown'
    this.gender = 'unknown'
  }
  /*************** MODAL *****************/
  openModal() {
    $('#modal-character').modal('show')
  }

  closeModal() {
    $('#modal-character').modal('hide')
    this.New()
  }

  Save(){

  }

  Update(){

  }

  Delete(){

  }
}

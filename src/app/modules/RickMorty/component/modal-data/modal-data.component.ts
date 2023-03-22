import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character, Gender, namesFormat, Req, Status } from 'src/app/core/interfaces';
import { MessagesService } from 'src/app/modules/RickMorty/services/Messages/messages.service';
import { ReqRickMortyService } from '../../services/ReqRickMorty/req-rick-morty.service';
import { ValidateCharacterService } from '../../services/ValidateCharacter/validate-character.service';

declare var $: any
let InfoCharacters: Req['info']

@Component({
  selector: 'app-modal-data',
  templateUrl: './modal-data.component.html',
  styleUrls: ['./modal-data.component.css']
})
export class ModalDataComponent implements OnInit {
  ListStatus: Array<{ field: Status }> = [{ field: 'Alive' }, { field: 'Dead' }, { field: 'unknown' }]
  ListGender: Array<{ field: Gender }> = [{ field: 'Female' }, { field: 'Male' }, { field: 'unknown' }]
  message: string = " ";

  @Input() Pages: number = 0
  @Input() maxloadCharacter: number = 0
  @Input() modalCUD: boolean = false;
  @Input() modalData: Character = {
    id: 0,
    image: "",
    name: "",
    status: 'unknown',
    gender: 'unknown',
    episode: []
  }
  @Input() ListCharacters: Array<Character> = []
  @Output() newListCharacters = new EventEmitter<Array<Character>>()


  constructor(private RickMorty: ReqRickMortyService,
    private msn: MessagesService,
    private Validate: ValidateCharacterService) { }

  ngOnInit(): void {
    this.RickMorty.getInfoCharacters().then((res: any) => {
      InfoCharacters = res.info
    })
  }

  /*************** BUTTON NUEVO *****************/
  New() {
    this.modalData = {
      id: 0,
      image: "",
      name: "",
      status: 'unknown',
      gender: 'unknown',
      episode: []
    }
  }

  Save() {
    var CheckId = this.Validate.ValidateId(this.modalData.id)
    var CheckName = this.Validate.ValidateName(this.modalData.name)
    if (CheckId.state == false || CheckName.state == false) {
      if (CheckId.state == false) {
        this.msn.Err(CheckId.message)
      }
      else if (CheckName.state == false) {
        this.msn.Err(CheckName.message)
      }
      else { }
    }
    else {
      if (this.Pages < InfoCharacters.pages) {
        if (this.modalData.id <= this.maxloadCharacter) {
          if (this.ListCharacters.findIndex((item) => item.id == this.modalData.id) == -1) {
            this.saveCharacter()
          }
          else {
            this.msn.saveErr()
          }
        }
        else if (this.modalData.id <= InfoCharacters.count) {
          this.msn.saveErr()
        }
        else {
          this.saveCharacter()
        }
      }
      else {
        if (this.ListCharacters.findIndex((item) => item.id == this.modalData.id) == -1) {
          this.saveCharacter()
        }
        else {
          this.msn.saveErr()
        }
      }
    }
  }

  Update() {
    var CheckName = this.Validate.ValidateName(this.modalData.name)
    if (CheckName.state == false) {
        this.msn.Err(CheckName.message)
    }
    else {
      console.log('aqui');

      var location = this.ListCharacters.findIndex((item) => item.id == (this.modalData.id))
      this.ListCharacters[location]=this.modalData
      this.newListCharacters.emit(this.ListCharacters)
      this.msn.updateSucces(this.modalData.name)
      this.closeModal()
    }
  }

  Delete() {
    var location = this.ListCharacters.findIndex((item) => item.id == (this.modalData.id))
    this.msn.msnDelete().then((willDelete) => {
      if (willDelete.isConfirmed) {
        this.msn.deleteSucces()
        this.ListCharacters.splice(location, 1);
        this.newListCharacters.emit(this.ListCharacters)
        this.closeModal()
      }
    })
  }

  closeModal() {
    $('#data-character').modal('hide')
  }

  saveCharacter() {
    this.ListCharacters.push(this.modalData)
    this.ListCharacters.sort((a: Character, b: Character) => { return a.id - b.id })
    this.newListCharacters.emit(this.ListCharacters)
    this.msn.saveSucces(this.modalData.name)
    this.closeModal()
  }
}

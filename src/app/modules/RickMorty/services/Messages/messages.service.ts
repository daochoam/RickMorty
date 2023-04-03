
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


type icon = 'success' | 'warning' | 'error' | 'info' | 'question'
type position = 'top' | 'top-start' | 'top-end' | 'center' | 'center-start' | 'center-end' | 'bottom' | 'bottom-start' | 'bottom-end'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor() { }

  private Message(Title: string,
    Message: string,
    Position: position = 'center',
    Icon: icon = 'success',
    Timer: number = 2000,
    ButtonConfig: boolean = false) {
    Swal.fire({
      position: Position,
      icon: Icon,
      title: Title,
      text: Message,
      showConfirmButton: ButtonConfig,
      timer: Timer,
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    })
  }

  Err(messages: string = '') {
    this.Message('Oops... Invalid Field', `${messages}`,
      'center', 'error', 2000)
  }

  saveSucces(name: string) {
    this.Message(`Character ${name}`, 'You have been successfully registered',
      'center', 'success', 2000)
  }

  saveErr() {
    this.Message('Oops...', 'The character has been previously registered',
      'center', 'warning', 2000)
  }

  updateSucces(name: string) {
    this.Message(`Character ${name}`, 'You have been successfully updated',
      'center', 'success', 2000)
  }

  updateErr() {
    this.Message('Oops...', 'The character has been previously registered',
      'center', 'error', 2000)
  }

  msnDelete() {
    return Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    })
  }

  deleteSucces() {
    this.Message('Deleted!', 'The character has been successfully removed.', 'center', 'success', 1500, false)
  }
}

import { Injectable } from '@angular/core';
import { PetitionService } from '../Petition/petition.service';

@Injectable({
  providedIn: 'root'
})
export class ReqRickMortyService {

  constructor( private Petition: PetitionService) { }

  LoadAll(page:number=0){
    var Post = {
      Host: this.Petition.URL,
      Path: `/character?page=${page}`,
      Payload: {}
    }
    return this.Petition.GET(Post.Host+Post.Path)
  }

  LoadAllCharacter(){
    var Post = {
      Host: this.Petition.URL,
      Path: `/character`,
      Payload: {}
    }
    return this.Petition.GET(Post.Host+Post.Path)
  }
}

import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character, ReqOneCharacter, ReqCharacters, ReqEpisode, Episode } from '../../../../core/interfaces'
import { PetitionService } from '../../../../services/Petition/petition.service';

@Injectable({
  providedIn: 'root'
})
export class ReqRickMortyService {

  constructor(  private Petition: PetitionService,
                private http: HttpClient) { }

    public URL: string = "https://rickandmortyapi.com/api"

  getInfoCharacters(){
    var Post = {
      Host: this.Petition.URL,
      Path: `/character`,
      Payload: {}
    }
    return this.Petition.GET(Post.Host+Post.Path)
  }

  LoadCharacter(id:number){
    var Post = {
      Host: this.Petition.URL,
      Path: `/character/${id}`,
      Payload: {}
    }
    return this.http.get<ReqOneCharacter>(Post.Host+Post.Path).pipe(
      map((character:Character) => {
          return Character.characterJSON(character)
        })
    )
   }


  LoadCharacters(page:number=1){
    var Post = {
      Host: this.Petition.URL,
      Path: `/character?page=${page}`,
      Payload: {}
    }
    return this.http.get<ReqCharacters>(Post.Host+Post.Path).pipe(
      map( resp =>{
        return resp.results.map( (character: Character) => {
          return Character.characterJSON(character)
        })
      })
    )
  }

}

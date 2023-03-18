import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character, ReqCharacter } from '../../interfaces'
import { PetitionService } from '../Petition/petition.service';

@Injectable({
  providedIn: 'root'
})
export class ReqRickMortyService {

  constructor( private Petition: PetitionService,
    private http: HttpClient
    ) { }

    public URL: string = "https://rickandmortyapi.com/api"

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

  LoadCharacter(page:number=1){
    var Post = {
      Host: this.Petition.URL,
      Path: `/character?page=${page}`,
      Payload: {}
    }
    return this.http.get<ReqCharacter>(Post.Host+Post.Path).pipe(
      map( resp =>{
        return resp.results.map( (character: Character) => {
          return Character.characterJSON(character)
        })
      })
    )
  }
}

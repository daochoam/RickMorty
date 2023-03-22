import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Episode, ReqEpisode } from 'src/app/core/interfaces';
import { PetitionService } from 'src/app/services/Petition/petition.service';

@Injectable({
  providedIn: 'root'
})
export class ReqEpisodesService {

  constructor(private Petition: PetitionService,
              private http: HttpClient) { }

  getInfoEpisodes(){
    var Post = {
      Host: this.Petition.URL,
      Path: `/episode`,
      Payload: {}
    }
    return this.Petition.GET(Post.Host+Post.Path)
  }


  LoadEpisode(url:string){
    return this.http.get<ReqEpisode>(url).pipe(
      map((episode:Episode) => {
          return Episode.episodeJSON(episode)
        })
    )
   }
}

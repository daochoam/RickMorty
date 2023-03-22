import {
  Component,
  OnInit,
  ViewEncapsulation } from '@angular/core';

import {  Character,
          Episode,
          Gender,
          Status,
          Req,
          generateArrayNumbers,
          shuffleArray,  } from '../../../../core/interfaces'
import { ReqEpisodesService } from '../../services/ReqEpisodes/req-episodes.service';
import { ReqRickMortyService } from '../../services/ReqRickMorty/req-rick-morty.service';


declare var $: any;
let InfoCharacters: Req['info']
let InfoEpisodes: Req['info']

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RickMortyComponent implements OnInit {
  // Observable
  Observables:any
  // Data Select
  ListStatus: Array<{ field: Status }> = [{ field: 'Alive' }, { field: 'Dead' }, { field: 'unknown' }]
  ListGender: Array<{ field: Gender }> = [{ field: 'Female' }, { field: 'Male' }, { field: 'unknown' }]

  // Data Database
  CUD: boolean = false;  // Create-Update-Delete (Create:false -- Update-Delete:true)
  Pages: number = 1        // Page Number Load Remote Api
  maxloadCharacter: number = 20       // Id Max -- Character Load Remote Api
  ListCharacters: Array<Character> = []  // List Characters
  DataCharacter: Character = {          // Character Load By Id
    id: 0,
    image: "",
    name: "",
    status: 'unknown',
    gender: 'unknown',
    episode: []
  }
  // View Episodes by Character
  imageCharacter: string = "";
  nameCharacter: string = "";
  ViewEpisode: Array<Episode> = []  // Episodes Info by Character
  constructor(private RickMorty: ReqRickMortyService,
              private Episode: ReqEpisodesService) { }

  ngOnInit() {
    /**
     * Load Data Base Info Characteres
     */
    this.RickMorty.getInfoCharacters().then((res: any) => {
      InfoCharacters = res.info
    })
    /**
    * Load Data Base Info Episodes
    */
    this.Episode.getInfoEpisodes().then((res: any) => {
      InfoEpisodes = res.info
    })
    /**
     * Load Init --> 20 Characters
     */
    this.Observables = this.RickMorty.LoadCharacters(this.Pages)
      .subscribe((resp) => {
        this.ListCharacters.push(...resp)
      })
  }

  /**
   * Load Character by Id
   * @param Id number --> Character to Upadate or Delete
   */
  loadCharacter(Id: number) {
    var location = this.ListCharacters.findIndex((item) => item.id == (Id))
    this.DataCharacter = this.ListCharacters[location]
    this.CUD = true
    this.openModal()
  }

  /**
   *  Add New Character
   */
  newCharacter(): void {
    let episode: Array<string> = []
    var image: number = Math.ceil(Math.random() * InfoCharacters.count);
    var numEpisode: Array<number> =generateArrayNumbers(1,InfoEpisodes.count).slice(0,5)
    for (let index of numEpisode){
      episode.push(`https://rickandmortyapi.com/api/episode/${index}`)
    }
    this.DataCharacter = {
      id: 0,
      image: `https://rickandmortyapi.com/api/character/avatar/${image}.jpeg`,
      name: "",
      status: 'unknown',
      gender: 'unknown',
      episode: episode
    }
    console.log(this.DataCharacter);

    this.CUD = false
    this.openModal()
  }

  viewEpisodes(Id: number): void {
    this.ViewEpisode = []
    let Episodes = []
    let location = this.ListCharacters.findIndex((item) => item.id == (Id))
    this.imageCharacter = this.ListCharacters[location].image
    this.nameCharacter = this.ListCharacters[location].name
    if (this.ListCharacters[location].episode.length <= 5) {
      Episodes = this.ListCharacters[location].episode
    } else {
      Episodes = shuffleArray(this.ListCharacters[location].episode)
      Episodes = Episodes.slice(0,5)
      Episodes.sort((a, b) => a.toString().localeCompare(b.toString(), 'es', { numeric: true }));
    }
    for (let chapter of Episodes){
      this.Episode.LoadEpisode(chapter.toString())
      .subscribe((resp) => {
        this.ViewEpisode.push(resp)
      })
    }
    this.openView()
  }

  /*************** MODAL *****************/
  openModal() {
    $('#data-character').modal('show')
  }

  openView() {
    $('#view-episode').modal('show')
  }

  /*************** SCROLL INFINITE *****************/
  onScroll() {
    //Lazy Load Characters --> Scroll, Add Page
    if (this.Pages < InfoCharacters.pages) {
      this.Pages += 1
      this.RickMorty.LoadCharacters(this.Pages)
        .subscribe((resp) => {
          this.ListCharacters.push(...resp)
          this.ListCharacters.sort((a:Character,b:Character)=> {return a.id-b.id})
          this.maxloadCharacter = Math.max(...this.ListCharacters.map(x => (x.id)))
        })
    }
  }

  ngOnDestroy(){
    this.Observables.unsubscribe()
  }
}

import { Component, OnInit } from '@angular/core';
import { ReqRickMortyService } from 'src/app/services/Request/req-rick-morty.service';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.css']
})
export class RickMortyComponent implements OnInit {
  Pages:number=1
  ListCharacters: any[] = []

  constructor(private RickMorty: ReqRickMortyService) { }

  ngOnInit() {
    this.LoadAllCharacters()
  }

  LoadAllCharacters(){
    this.RickMorty.LoadAll(this.Pages).then((res: any) => {
      if (this.Pages < res.info.pages){

      }

    //   for (let pages = 1; pages < res.info.pages; pages++) {
    //     this.RickMorty.LoadAll(pages).then((res: any) => {
    //       for (var character in res.results) {
    //         this.ListCharacters.push(res.results[character])
    //         this.ListCharacters.sort((a, b) => {return a.id - b.id})
    //       }
    //     })
    //   }
    // })
  })
  }
  View(Id:number): void{
    console.log(Id)
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Character, ReqCharacters } from '../../core/interfaces'
@Injectable({
  providedIn: 'root'
})
export class PetitionService {

  constructor(private http: HttpClient) { }

  public URL: string = "https://rickandmortyapi.com/api"

  POST(url: string, data: {}) {
    let promise = new Promise((resolve, reject) => {
      this.http.post(url, data)
        .toPromise()
        .then((res: any) => {
          resolve(res)
        })
    })
    return promise
  }

  GET(url: string) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(url)
        .toPromise()
        .then((res: any) => {
          resolve(res)
        })
    })
    return promise
  }

  getCharacter(url: string): Observable<Character[]> {
    return this.http.get<Character[]>(url)
  }
}

export type Status= 'Alive' | 'Dead' | 'unknown'
export type Gener= 'Male' | 'Female' |  'Genderless' | 'unknown'

export interface Characters {
  id: number,
  name: string,
  status: Status,
  gener: Gener,
  episodes:{
    name: string,
    episode: string
  }
}

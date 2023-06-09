export type Species = "Human" | "Alien";
export type Status  = "Alive" | "Dead" | "unknown";
export type Gender  = "Male"  | "Female" | "unknown";


export interface Req {
  info:    Info;
  results: ReqCharacters[];
}
export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export interface Location {
  name: string;
  url:  string;
}

export interface ReqCharacters {
  results: any;
  id:        number;
  name:      string;
  status:    Status;
  species:   Species;
  type:      string;
  gender:    Gender;
  origin:    Location;
  location:  Location;
  image:     string;
  episode:   string[];
  url:       string;
  created:   Date;
}

export interface ReqOneCharacter {
  id:        number;
  name:      string;
  status:    Status;
  species:   Species;
  type:      string;
  gender:    Gender;
  origin:    Location;
  location:  Location;
  image:     string;
  episode:   string[];
  url:       string;
  created:   Date;
}

import { Gender, Status } from "./request-characters";

export class Character{

  static characterJSON( obj : Character){
    return new Character (
      obj['id'],
      obj['image'],
      obj['name'],
      obj['status'],
      obj['gender'],
      obj['episode']
    )
  }

  constructor(
    public id:      number,
    public image:   string,
    public name:    string,
    public status:  Status,
    public gender:  Gender,
    public episode: string[],
  ){}
}

export class Episode{

  static episodeJSON( obj : Episode){
    return new Episode (
      obj['id'],
      obj['name'],
      obj['air_date'],
      obj['episode']
    )
  }

  constructor(
    public id:        number,
    public name:      string,
    public air_date:  string,
    public episode:   string,
  ){}
}

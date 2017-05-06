

export class Event {

  public id: string;
  public name: string;
  public categories: string[];
  public description: string;
  public coords?: {
    latitude: number,
    longitude: number
  };

  constructor() {}
}

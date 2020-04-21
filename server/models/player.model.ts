export enum Position {
  GOALKEEPER = 'GK',
  LEFT_DEFENDER = 'DL',
  CENTER_DEFENDER = 'DC',
  RIGHT_DEFENDER = 'DR',
  DEFENSIVE_MIDFIELDER = 'MD',
  LEFT_MIDFIELDER = 'ML',
  CENTER_MIDFIELDER = 'MC',
  RIGHT_MIDFIELDER = 'MR',
  ADVANCED_MIDFIELDER = 'AM',
  LEFT_WINGER = 'LW',
  RIGHT_WINGER = 'RW',
  STRIKER = 'ST',
}

export class Player {
  id?: string;
  name: string;
  number: number;
  position: Position;

  constructor(object: Partial<Player>) {
      // ID is set to 1. Just for demo purposes
    Object.assign(this, {id: '1',...object});
  }
}

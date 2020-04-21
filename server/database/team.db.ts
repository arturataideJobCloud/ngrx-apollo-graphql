import { Team } from '../models';
import { players } from './players.db';

export const team: Team = {
  id: '1',
  name: 'Jobcloud FC',
  city: 'Genève',
  players,
};

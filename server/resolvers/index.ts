import { IResolvers } from 'apollo-server';
import {
  playerQueryResolvers,
  playerMutationResolvers,
} from './player.resolver';
import { teamQueryResolvers } from './team.resolver';

export const resolvers: IResolvers = {
  Positions: {
    GOALKEEPER: 'GK',
    LEFT_DEFENDER: 'DL',
    CENTER_DEFENDER: 'DC',
    RIGHT_DEFENDER: 'DR',
    DEFENSIVE_MIDFIELDER: 'MD',
    LEFT_MIDFIELDER: 'ML',
    CENTER_MIDFIELDER: 'MC',
    RIGHT_MIDFIELDER: 'MR',
    ADVANCED_MIDFIELDER: 'AM',
    LEFT_WINGER: 'LW',
    RIGHT_WINGER: 'RW',
    STRIKER: 'ST',
  },
  Query: {
    ...playerQueryResolvers,
    ...teamQueryResolvers,
  },

  Mutation: {
    ...playerMutationResolvers,
  },
};

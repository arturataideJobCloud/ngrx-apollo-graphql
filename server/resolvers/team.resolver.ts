import { IResolverObject } from 'apollo-server';
import { db } from '../database';

export const teamQueryResolvers: IResolverObject = {
  team: () => db.team,
};

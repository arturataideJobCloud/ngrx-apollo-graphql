import { team } from '../database';
import { IResolverObject } from 'apollo-server';

export const teamQueryResolvers: IResolverObject = {
  team: () => team,
};

import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';
import { playerTypeDef } from './player.schema';
import { teamTypeDef } from './team.schema';

export const typeDefs: DocumentNode = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  ${playerTypeDef}
  ${teamTypeDef}
`;

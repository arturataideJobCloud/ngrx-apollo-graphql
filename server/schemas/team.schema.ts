import { DocumentNode } from 'graphql';
import { gql } from 'apollo-server';

export const teamTypeDef: DocumentNode = gql`
  type Team {
    id: String
    name: String
    city: String
    players: [Player]
  }

  extend type Query {
    team: Team
  }
`;

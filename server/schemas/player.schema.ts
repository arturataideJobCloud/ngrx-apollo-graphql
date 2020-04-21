import { gql } from 'apollo-server';
import { DocumentNode } from 'graphql';

export const playerTypeDef: DocumentNode = gql`
  enum Positions {
    GOALKEEPER
    LEFT_DEFENDER
    CENTER_DEFENDER
    RIGHT_DEFENDER
    DEFENSIVE_MIDFIELDER
    LEFT_MIDFIELDER
    CENTER_MIDFIELDER
    RIGHT_MIDFIELDER
    ADVANCED_MIDFIELDER
    LEFT_WINGER
    RIGHT_WINGER
    STRIKER
  }

  type Player {
    id: String
    name: String
    number: Int
    position: Positions
  }

  extend type Query {
    players: [Player]
    playersById: Player
  }

  input PlayerInput {
    name: String!
    number: Int!
    position: Positions!
  }

  extend type Mutation {
    addPlayer(payload: PlayerInput): Player
  }
`;

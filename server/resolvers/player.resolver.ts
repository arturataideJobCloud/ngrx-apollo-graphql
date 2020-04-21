import { IResolverObject, UserInputError } from 'apollo-server';
import { Player, Position } from '../models';
import { team } from '../database';

let players: Array<Player> = [
  {
    id: '1',
    name: 'Artur Ataide',
    number: 10,
    position: Position.ADVANCED_MIDFIELDER,
  },
];

export const playerQueryResolvers: IResolverObject = {
  players: () => players,
  playersById: (id: string) => players[id],
};

export const playerMutationResolvers: IResolverObject = {
  addPlayer: (_parent, args, _context, _info) => addPlayer(args),
};

function addPlayer({ payload }) {
  const isNumberTaken = players.find(
    (_player) => _player.number === payload.number,
  );

  if (isNumberTaken) {
    throw new UserInputError('Number Already Chosen', {
      invalidArgs: ['position'],
    });
  }
  const player = new Player({
    name: payload.name,
    number: payload.number,
    position: payload.position,
  });

  players = [...players, player];
  team.players = players;
  return player;
}

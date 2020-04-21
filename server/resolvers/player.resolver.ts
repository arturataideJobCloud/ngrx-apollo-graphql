import { IResolverObject, UserInputError } from 'apollo-server';
import { Player } from '../models';
import { db } from '../database';


export const playerQueryResolvers: IResolverObject = {
  players: () => db.players,
  playersById: (id: string) => db.players[id],
};

export const playerMutationResolvers: IResolverObject = {
  addPlayer: (_parent, args, _context, _info) => addPlayer(args),
};

function addPlayer({ payload }) {
  const isNumberTaken = db.players.find(
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

  db.players = [...db.players, player];
  db.team.players = db.players;
  return player;
}

import { IResolverObject, UserInputError, ApolloError } from 'apollo-server';
import { Player } from '../models';
import { db } from '../database';
import { IPlayerInput } from 'interfaces/player-input.interface';

export const playerQueryResolvers: IResolverObject = {
  players: () => db.players,
  playersById: (id: string) => db.players[id],
};

export const playerMutationResolvers: IResolverObject = {
  addPlayer: (_parent, { payload }, _context, _info) => addPlayer(payload),
  deletePlayer: (_parent, { playerId }, _context, _info) =>
    deletePlayer(playerId),
};

function addPlayer(payload: IPlayerInput): Player {
  const isNumberTaken = db.players.find(
    (_player: Player) => _player.number === payload.number,
  );

  if (isNumberTaken) {
    throw new UserInputError(`Number ${payload.number} already chosen!`, {
      invalidArgs: ['number'],
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

function deletePlayer(playerId: string) {
  const playerIndex = db.players.findIndex(
    (player: Player) => player.id === playerId,
  );
  if (playerIndex >= 0) {
    return db.players.splice(playerIndex, 1) ? true : false;
  }

  throw new ApolloError(
    `Player ${playerId} not found!`,
    'UNPROCESSABLE_ENTITY',
    {
      id: playerId,
    },
  );
}

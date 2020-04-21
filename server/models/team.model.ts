import { Player } from "./player.model";

export class Team {
    id?: string;
    name: string;
    city: string;
    players: Array<Player>
}
import { Cell, Position } from './Board';
import { PlayerType } from './Player';

export class MoveResult {
  constructor(private killedPiece: Piece){
    getKilled(){
      return this.killedPiece;
    }
  }
}

export interface Piece {
  ownerType: PlayerType;
  currentPosition: Position
  move(from: Cell, to: Cell): MoveResult;
  render(): string;
}

abstract class DefaultPiece implements Piece{
  constructor(public readonly ownerType: PlayerType, public currentPosition){

  }
  move(from: Cell, to: Cell): MoveResult{
    throw new Error('Method not implemented.');
  }
  render(): string{
    throw new Error('Method not implemented.')
  }
}
import { Board, DeadZone } from "./Board";
import { PlayerType, Player } from "./Player";
import "./Piece";

export class Game {
  readonly upperPlayer = new Player(PlayerType.UPPER);
  readonly lowerPlayer = new Player(PlayerType.LOWER);

  readonly board = new Board(this.upperPlayer, this.lowerPlayer);
  readonly upperDeadZone = new DeadZone("upper");
  readonly lowerDeadZone = new DeadZone("lower");

  constructor() {
    const boardContainer = document.querySelector(".board-container");
    // boardContainer.firstChild.remove();
    boardContainer.appendChild(this.board._el);

    this.board.render();
  }
}

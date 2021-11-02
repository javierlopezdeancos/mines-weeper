var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { MinesWeeper } from './mines-weeper';
let JlaMinesWeeperGame = class JlaMinesWeeperGame extends LitElement {
    constructor() {
        super();
        this.minesWeeper = new MinesWeeper(4, 3);
        this.on = false;
        this.reload = false;
        this.board = [[]];
    }
    getCellClass(value) {
        let c = 'cell';
        if (value === '1') {
            c = c + ' cell--one';
        }
        else if (value === '2') {
            c = c + ' cell--two';
        }
        else if (value === '3') {
            c = c + ' cell--three';
        }
        return c;
    }
    render() {
        return html `
      ${!this.on
            ? html ` ${!this.reload
                ? html `
                <h2>Welcome to the mines weeper web game!!</h2>
                <button @click="${this.start}">START</button>
              `
                : html `
                <h2>Do yo want to start again?</h2>
                <button @click="${this.restart}">RESTART</button>
              `}`
            : html ` <div class="board">
            ${this.board.map((row, r) => html `
                ${row.map((cell, c) => html ` <div
                      class="${this.getCellClass(cell)}"
                      data-row="${r}"
                      data-column="${c}"
                      @click="${this.discover}"
                    >
                      ${cell}
                    </div>`)}
              `)}
          </div>`}
    `;
    }
    updateStatus() {
        this.on = this.minesWeeper.on;
    }
    updateBoard() {
        this.board = [...this.minesWeeper.matrix];
    }
    finish() {
        this.minesWeeper.resolve();
        this.updateBoard();
    }
    discover(e) {
        var _a;
        this.updateStatus();
        if (!this.on) {
            this.reload = true;
            return;
        }
        const dataRow = (_a = e.target) === null || _a === void 0 ? void 0 : _a.getAttribute('data-row');
        const dataColumn = e.target.getAttribute('data-column');
        if (dataRow && dataColumn) {
            const row = parseInt(dataRow, 10);
            const column = parseInt(dataColumn, 10);
            const [hasMine] = this.minesWeeper.pick(row, column);
            if (hasMine) {
                this.finish();
            }
            this.updateBoard();
        }
    }
    start() {
        console.log('START');
        this.minesWeeper.initialize();
        this.updateStatus();
        this.updateBoard();
        console.log('ON', this.on);
    }
    restart() {
        this.reload = false;
        this.start();
    }
};
JlaMinesWeeperGame.styles = css `
    :host {
      --color-primary: #000000;
      --color-secondary: #ffffff;
      --color-auxiliary-005: #e0e0e0;
      --color-auxiliary-006: #cacaca;
      --color-auxiliary-007: #acacac;
      --color-auxiliary-008: #8f8f8f;
      --font-family-primary: 'Poppins', sans-serif;
      display: block;
      background: var(--color-secondary);
      font-family: var(--font-family-primary);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      text-align: center;
    }

    .board {
      display: grid;
      gap: 0;
      grid-auto-rows: 10em;
      grid-template-columns: repeat(4, minmax(min(100%, 10em), 1fr));
      grid-auto-flow: dense;
    }

    .cell {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      font-size: 5.5em;
      font-weight: 500;
      color: var(--color-auxiliary-005);
    }

    .cell:hover {
      cursor: pointer;
    }

    .cell.cell--one {
      color: var(--color-auxiliary-006);
    }

    .cell.cell--two {
      color: var(--color-auxiliary-007);
    }

    .cell.cell--three {
      color: var(--color-auxiliary-008);
    }

    button {
      --button-width: 140px;
      --button-width-long: 150px;
      border: none;
      box-shadow: none;
      background: var(--color-primary);
      border-radius: 40px;
      font-size: 1.3em;
      font-weight: 700;
      width: var(--button-width);
      height: 50px;
      color: var(--color-secondary);
      cursor: pointer;
    }

    @keyframes width-button-hover {
      from {
        width: var(--button-width);
      }
      25% {
        width: var(--button-width-long);
      }
      50% {
        width: calc(var(--button-width) - 5px);
      }
      75% {
        width: var(--button-width-long);
      }
      to {
        width: var(--button-width);
      }
    }

    button:hover {
      width: var(--button-width);
      animation-duration: 0.5s;
      animation-name: width-button-hover;
    }
  `;
__decorate([
    state()
], JlaMinesWeeperGame.prototype, "on", void 0);
__decorate([
    state()
], JlaMinesWeeperGame.prototype, "reload", void 0);
__decorate([
    state()
], JlaMinesWeeperGame.prototype, "board", void 0);
JlaMinesWeeperGame = __decorate([
    customElement('jla-mines-weeper-game')
], JlaMinesWeeperGame);
export { JlaMinesWeeperGame };
//# sourceMappingURL=mines-weeper-game.js.map
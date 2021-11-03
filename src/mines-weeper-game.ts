import {LitElement, html, css, TemplateResult} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import {MinesWeeper} from './mines-weeper';

@customElement('jla-mines-weeper-game')
export class JlaMinesWeeperGame extends LitElement {
  private minesWeeper: MinesWeeper = new MinesWeeper(4, 3);

  @state()
  protected on = false;

  @state()
  protected reload = false;

  @state()
  protected board: string[][] = [[]];

  constructor() {
    super();
  }

  private getCellClass(value: string | boolean): string {
    let c = 'cell';

    if (value === '1') {
      c = c + ' cell--one';
    } else if (value === '2') {
      c = c + ' cell--two';
    } else if (value === '3') {
      c = c + ' cell--three';
    }

    return c;
  }

  static override styles = css`
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
      --button-width: 8em;
      --button-width-long: 9em;
      border: none;
      box-shadow: none;
      background: var(--color-primary);
      border-radius: 80px;
      margin-top: 1em;
      font-size: 1.3em;
      font-weight: 700;
      width: var(--button-width);
      height: 3em;
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

    @media screen and (max-width: 1000px) {
      :host {
        font-size: 35px;
      }

      .board {
        grid-auto-rows: 9em;
        grid-template-columns: repeat(4, minmax(min(100%, 5em), 1fr));
      }

      .cell {
        font-size: 4em;
      }
    }
  `;

  override render(): TemplateResult {
    return html`
      ${!this.on
        ? html` ${!this.reload
            ? html`
                <h2>Welcome to the mines weeper web game!!</h2>
                <button @click="${this.start}">START</button>
              `
            : html`
                <h2>Do yo want to start again?</h2>
                <button @click="${this.restart}">RESTART</button>
              `}`
        : html` <div class="board">
            ${this.board.map(
              (row, r) => html`
                ${row.map(
                  (cell, c) =>
                    html` <div
                      class="${this.getCellClass(cell)}"
                      data-row="${r}"
                      data-column="${c}"
                      @click="${this.discover}"
                    >
                      ${cell}
                    </div>`
                )}
              `
            )}
          </div>`}
    `;
  }

  private updateStatus(): void {
    this.on = this.minesWeeper.on;
  }

  private updateBoard(): void {
    this.board = [...this.minesWeeper.matrix];
  }

  private finish(): void {
    this.minesWeeper.resolve();
    this.updateBoard();
  }

  private discover(e: MouseEvent): void {
    this.updateStatus();

    if (!this.on) {
      this.reload = true;
      return;
    }

    const dataRow = (e.target as Element)?.getAttribute('data-row');
    const dataColumn = (e.target as Element).getAttribute('data-column');

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

  private start(): void {
    this.minesWeeper.initialize();
    this.updateStatus();
    this.updateBoard();
  }

  private restart(): void {
    this.reload = false;
    this.start();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'jla-mines-weeper-game': JlaMinesWeeperGame;
  }
}

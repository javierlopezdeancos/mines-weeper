export class MinesWeeper {
  public on = false;

  public matrix: string[][] = [];

  public size: number;

  public difficulty: number;

  public mines: number[][] = [];

  public picks = 0;

  public cells = 0;

  private displayed: number[][] = [];

  private symbols = {
    mine: '💣',
    bomb: '💥',
    hide: '⬜',
  };

  constructor(size: number, difficulty: number) {
    this.size = size;
    this.difficulty = difficulty;
    this.cells = size * size;
  }

  private getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private setMines(): void {
    const m: number[][] = [];

    for (let i = 0; i < this.difficulty; i++) {
      const row = this.getRandom(i, this.difficulty);
      const column = this.getRandom(this.difficulty, i);

      m[i] = [row, column];
    }

    this.mines = [...m];
  }

  private generateRow(): string[] {
    const r: string[] = [];

    for (let c = 0; c < this.size; c++) {
      r[c] = this.symbols.hide;
    }

    return r;
  }

  private generate(): void {
    const m: string[][] = [];

    for (let r = 0; r < this.size; r++) {
      const row = this.generateRow();
      m[r] = row;
    }

    this.matrix = [...m];
  }

  private cellHasMine(row: number, column: number): boolean {
    for (const mine of this.mines) {
      const [r, c] = mine;

      if (row === r && column === c) {
        return true;
      }
    }

    return false;
  }

  private getCloseCells(row: number, column: number): number[][] {
    const closeCells: number[][] = [];

    const columnStart = column - 1 < 0 ? column : column - 1;
    const columnEnd = column + 1 > this.size ? column : column + 1;
    const rowStart = row - 1 < 0 ? row : row - 1;
    const rowEnd = row + 1 > this.size ? row : row + 1;

    for (let j = columnStart; j <= columnEnd; j++) {
      for (let i = rowStart; i <= rowEnd; i++) {
        if ([i, j] !== [row, column] && this.cellHasMine(i, j)) {
          closeCells.push([i, j]);
        }
      }
    }

    return closeCells;
  }

  private getNearbyMines(r: number, c: number): number {
    return this.getCloseCells(r, c).length;
  }

  public resolve() {
    for (let r = 0; r < this.size; r++) {
      for (let c = 0; c < this.size; c++) {
        const hasMine = this.cellHasMine(r, c);

        if (hasMine) {
          this.matrix[r][c] = this.symbols.mine;
        } else {
          const nearbyMines = this.getNearbyMines(r, c).toString();
          this.matrix[r][c] = nearbyMines;
        }
      }
    }
  }

  public set(row: number, column: number, value: string): void {
    if (value !== this.symbols.hide) {
      this.matrix[row][column] = value;
      return;
    }

    this.matrix[row][column] = value;
  }

  public pick(row: number, column: number): [boolean, string | undefined] {
    this.picks++;
    const hasMine = this.cellHasMine(row, column);

    if (hasMine) {
      this.set(row, column, this.symbols.bomb);
      this.displayed.push([row, column]);
      this.on = false;
      return [true, undefined];
    }

    const nearbyMines = this.getNearbyMines(row, column).toString();
    this.set(row, column, nearbyMines);
    this.displayed.push([row, column]);
    return [false, nearbyMines];
  }

  public initialize(): void {
    this.on = true;
    this.generate();
    this.setMines();
  }
}

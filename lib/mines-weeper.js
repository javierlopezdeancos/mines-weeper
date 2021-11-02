export class MinesWeeper {
    constructor(size, difficulty) {
        this.on = false;
        this.matrix = [];
        this.mines = [];
        this.picks = 0;
        this.cells = 0;
        this.displayed = [];
        this.symbols = {
            mine: '💣',
            bomb: '💥',
            hide: '❓',
        };
        this.size = size;
        this.difficulty = difficulty;
        this.cells = size * size;
    }
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    setMines() {
        const m = [];
        for (let i = 0; i < this.difficulty; i++) {
            const row = this.getRandom(i, this.difficulty);
            const column = this.getRandom(this.difficulty, i);
            m[i] = [row, column];
        }
        this.mines = [...m];
    }
    generateRow() {
        const r = [];
        for (let c = 0; c < this.size; c++) {
            r[c] = this.symbols.hide;
        }
        return r;
    }
    generate() {
        const m = [];
        for (let r = 0; r < this.size; r++) {
            const row = this.generateRow();
            m[r] = row;
        }
        this.matrix = [...m];
    }
    cellHasMine(row, column) {
        for (const mine of this.mines) {
            const [r, c] = mine;
            if (row === r && column === c) {
                return true;
            }
        }
        return false;
    }
    getCloseCells(row, column) {
        const closeCells = [];
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
    getNearbyMines(r, c) {
        return this.getCloseCells(r, c).length;
    }
    resolve() {
        for (let r = 0; r < this.size; r++) {
            for (let c = 0; c < this.size; c++) {
                const hasMine = this.cellHasMine(r, c);
                if (hasMine && this.matrix[r][c] !== this.symbols.bomb) {
                    this.matrix[r][c] = this.symbols.mine;
                }
                else if (!hasMine) {
                    const nearbyMines = this.getNearbyMines(r, c).toString();
                    this.matrix[r][c] = nearbyMines;
                }
            }
        }
    }
    set(row, column, value) {
        if (value !== this.symbols.hide) {
            this.matrix[row][column] = value;
            return;
        }
        this.matrix[row][column] = value;
    }
    pick(row, column) {
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
    initialize() {
        this.on = true;
        this.generate();
        this.setMines();
    }
}
//# sourceMappingURL=mines-weeper.js.map
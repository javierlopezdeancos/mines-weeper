export declare class MinesWeeper {
    on: boolean;
    matrix: string[][];
    size: number;
    difficulty: number;
    mines: number[][];
    picks: number;
    cells: number;
    private displayed;
    private symbols;
    constructor(size: number, difficulty: number);
    private getRandom;
    private setMines;
    private generateRow;
    private generate;
    private cellHasMine;
    private getCloseCells;
    private getNearbyMines;
    resolve(): void;
    set(row: number, column: number, value: string): void;
    pick(row: number, column: number): [boolean, string | undefined];
    initialize(): void;
}
//# sourceMappingURL=mines-weeper.d.ts.map
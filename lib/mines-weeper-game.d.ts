import { LitElement, TemplateResult } from 'lit';
export declare class JlaMinesWeeperGame extends LitElement {
    private minesWeeper;
    protected on: boolean;
    protected reload: boolean;
    protected board: string[][];
    constructor();
    private getCellClass;
    static styles: import("lit").CSSResult;
    render(): TemplateResult;
    private updateStatus;
    private updateBoard;
    private finish;
    private discover;
    private start;
    private restart;
}
declare global {
    interface HTMLElementTagNameMap {
        'jla-mines-weeper-game': JlaMinesWeeperGame;
    }
}
//# sourceMappingURL=mines-weeper-game.d.ts.map
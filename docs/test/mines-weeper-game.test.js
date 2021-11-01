import { JlaMinesWeeperGame } from '../mines-weeper-game.js';
import { assert } from '@open-wc/testing';
suite('jla-mines-weeper-game', () => {
    test('is defined', () => {
        const el = document.createElement('jla-mines-weeper-game');
        assert.instanceOf(el, JlaMinesWeeperGame);
    });
});
//# sourceMappingURL=mines-weeper-game.test.js.map
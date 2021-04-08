import sum from './simple';

jest.mock('./sqr', () => ({
    __esModule: true, // this property makes it work
    default: x => x
}));

describe('simple test', () => {
    it('test if 1*1 + 1 = 2', () => {
        // дія
        const result = sum(1, 1);
        // ствердження
        expect(result).toBe(22);
    });

    it('test if 2*2 + 8 = 12', () => {
        // дія
        const result = sum(2, 8);
        // ствердження
        expect(result).toBe(10);
    });

    it('test if 1*1 + 1 !== 8', () => {
        // дія
        const result = sum(1, 1);
        // ствердження
        expect(result).not.toBe(8);
    });
});

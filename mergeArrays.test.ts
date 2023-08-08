import { merge } from './mergeArrays';
import { expect } from 'chai';

describe('mergeArrays', () => {
    it('should merge two sorted arrays', () => {
        const collection1 = [1, 3, 5, 7];
        const collection2 = [2, 4, 6, 8];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8];

        const result = merge(collection1, collection2);

        expect(result).to.deep.equal(expected);
    });
});

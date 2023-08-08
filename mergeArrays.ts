export function merge(collection1: number[], collection2: number[]): number[] {
    const merged: number[] = [];
    let index1 = 0;
    let index2 = 0;

    while (index1 < collection1.length && index2 < collection2.length) {
        if (collection1[index1] < collection2[index2]) {
            merged.push(collection1[index1]);
            index1++;
        } else {
            merged.push(collection2[index2]);
            index2++;
        }
    }

    // Append remaining elements from either collection
    while (index1 < collection1.length) {
        merged.push(collection1[index1]);
        index1++;
    }

    while (index2 < collection2.length) {
        merged.push(collection2[index2]);
        index2++;
    }

    return merged;
}

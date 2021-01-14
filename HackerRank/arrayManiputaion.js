function arrayManipulation(params) {

    let diffs = new Array(n + 1).fill(0);

    queries.forEach(query => {
        const [range_start, range_end, addend] = query;
        diffs[range_start - 1] += addend;
        diffs[range_end] -= addend;
    });

    return diffs.reduce((acc, cur) => {
        return {
            running_total: acc.running_total + cur,
            max: Math.max(acc.max, acc.running_total + cur)
        };
    }, { running_total: 0, max: 0 }).max;
}
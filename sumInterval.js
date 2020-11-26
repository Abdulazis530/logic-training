


function sumIntervals(intervals) {
    const ranges = new Set();

    intervals.forEach(([start, end]) => {
        for (let i = start; i < end; i++) ranges.add(i);
    });

    console.log(ranges)
    return ranges.size;
}


console.log(sumIntervals([[1, 5], [1, 5]]));
console.log(sumIntervals([
    [1, 2],
    [6, 10],
    [11, 15]
]))

console.log(sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
]));

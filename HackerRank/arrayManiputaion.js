function arrayManipulation(params) {


    // let temp=[]
    // let startIdx, endIdx, val, crntMax;

    // //createing array of zeros
    // for(let i =0; i<n;i++) temp.push(0)
    // for(let iteration=0; iteration<queries.length; iteration++){
    //     startIdx=queries[iteration][0]
    //     endIdx=queries[iteration][1]
    //     val=queries[iteration][2]
    //     for(startIdx;startIdx<=endIdx;startIdx++) temp[startIdx-1]+=val
    //     crntMax = Math.max(...temp)
    // }

    // return crntMax


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
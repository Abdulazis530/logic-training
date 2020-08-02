weirdReverse = (a) =>
  a.reduceRight((r, c) => {
    r.push(c);
    return r;
  }, []);

console.log(weirdReverse([1, 2, 3, 4, 5]));

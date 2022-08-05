const generateRandomIndex: (total: number) => Array<number> = (total) => {
  const results = new Array<number>(total).fill(0).map((v, i) => i);

  results.sort((a, b) => {
    return 0.5 - Math.random();
  });

  return results;
};

export default generateRandomIndex;

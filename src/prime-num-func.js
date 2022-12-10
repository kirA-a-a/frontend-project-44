const primeNum = (num) => {
  if (num === 1) {
    return false;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  } return true;
};

export default primeNum;

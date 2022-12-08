import randomNum from "./random-num.js";


const getArrRandomNumProgression = () => {
  const result = [];
  const progressionNum = randomNum();

  for (let i = 1; i < 11; i+=1) {
    result[0] = progressionNum;
    result[i] = result[i - 1] + progressionNum;
  }
  result[randomNum()] = '..';
  return result.slice(1).join(' ')
};

console.log(getArrRandomNumProgression())
export default getArrRandomNumProgression;
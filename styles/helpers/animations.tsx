// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const animationChildDelay = (totalChildren: number, delay: number): any => {
  let returnedCSS = {};
  let i = 1;
  while (i <= totalChildren) {
    const childDelay = {
      [`&:nth-child(${i})`]: {
        animationDelay: `${i * delay}s`,
      },
    };
    returnedCSS = { ...returnedCSS, ...childDelay };
    i++;
  }
  return returnedCSS;
};

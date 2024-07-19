export const getPageList = (count: number, perPage = 10): Array<number> => {
  let pages: Array<number> = [];
  for (let i = 1; i <= Math.ceil(count! / perPage); i++) {
    pages.push(i);
  }
  return pages;
};

export default getPageList;

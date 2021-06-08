export function getName({ name }) {
  return name;
}

export function copyAndPush(array, number) {
  return [...array, number];
}

export function capitalizeAndFilter(array) {
//   const newArray = [];
//   for(let i = 0; i < array.length; i++){
//     if(array[i][0] !== 'f') newArray.push(array[i].toUpperCase());
//   }     
//   return newArray;
  return array.filter((item) => item[0] !== 'f'.toLowerCase()).map((item) => {
    return item.toUpperCase();
  });
}

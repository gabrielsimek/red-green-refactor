import request from 'superagent';
export function getName({ name }) {
  return name;
}

export function copyAndPush(array, number) {
  return [...array, number];
}

export function capitalizeAndFilter(array) {
  return array.filter((item) => item[0].toLowerCase() !== 'f').map((item) => {
    return item.toUpperCase();
  });
}

//   const newArray = [];
//   for(let i = 0; i < array.length; i++){
//     if(array[i][0].toLowerCase() !== 'f') newArray.push(array[i].toUpperCase());
//   }     
//   return newArray;
export async function fetchQuotes(number) {
  const response = await request.get(`http://futuramaapi.herokuapp.com/api/quotes/${number}`);
  const { character, quote, image } = response.body[0];
  return { 
    name: character,
    text: quote,
    image
  };
}

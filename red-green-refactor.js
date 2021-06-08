import request from 'superagent';
export function getName({ name }) {
  return name;
}

export function copyAndPush(array, number) {
  return [...array, number];
}

export function capitalizeAndFilter(array) {
  return array.filter((item) => item[0] !== 'f'.toLowerCase()).map((item) => {
    return item.toUpperCase();
  });
}

//   const newArray = [];
//   for(let i = 0; i < array.length; i++){
//     if(array[i][0] !== 'f') newArray.push(array[i].toUpperCase());
//   }     
//   return newArray;
export async function fetchQuotes(number) {
  const response = await request.get(`http://futuramaapi.herokuapp.com/api/quotes/${number}`);
  const quote = response.body[0];
  return { 
    name: quote.character,
    text: quote.quote,
    image: quote.image
  };
}

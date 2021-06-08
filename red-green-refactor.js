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

export async function fetchQuotes(number) {
  const response = await request.get(`http://futuramaapi.herokuapp.com/api/quotes/${number}`);
  return response.body[0];
}

export function formatQuote({ character, quote, image }) {
  return {
    name: character,
    text: quote,
    image
  };
}

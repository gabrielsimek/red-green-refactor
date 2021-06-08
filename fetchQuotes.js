

export async function fetchQuotes(number) {
  const response = await request.get(`http://futuramaapi.herokuapp.com/api/quotes/${number}`);
  const { character, quote, image } = response.body[0];
  return { 
    name: character,
    text: quote,
    image
  };
}
  

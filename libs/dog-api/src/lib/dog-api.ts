import axios from "axios";

export interface IDog {
  status: string;
  message: string;
}

export async function getRandomDog(): Promise<IDog>  {
  const { data } = await axios.get(`https://dog.ceo/api/breeds/image/random`);
  return data;
}


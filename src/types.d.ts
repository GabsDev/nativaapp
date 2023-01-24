export interface Movie {
  nombre: string;
  anno: string;
  tipo: string;
  imagen: string;
  imdbID: string;
  amount: number;
  price: number;
}

export type ResponseFromApi = Array<{
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  amount: number;
  price: number;
  totalResults: number;
}>;

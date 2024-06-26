import { CustomArrowProps } from "react-slick";

export interface LayoutProps {
  children: React.ReactNode;
}
export interface ViewWidth {
  viewWidth: number;
}
export interface TypeDevice {
  deviceType: string;
}
export interface LayoutContextProps {
  deviceType: string;
}
export interface LayoutProviderProps {
  deviceType: string;
  children: React.ReactNode;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
// export interface Movies {
//   poster_path: string | null;
//   id: string;
//   title: string;
//   textBtn?: string;
//   vote_average?: number;
//   release_date?: string;
// }

export interface LoadMoreBtnCard {
  
}

export interface MovieCardProps {
  movie: Movie;
}

export interface ListMoviesProps {
  movies: Movie[];
  onLoadMore: (titles: string[]) => void;
}

export interface MySliderProps {
  arrMovies: Movie[];
}

export interface GetShowMoviesProps {
  title: string;
  getMovies: (page: number) => Promise<Movie[]>;
}

export interface ResponsDataTMbD {
  arrMovies: {
    data: {
      results: Movie[];
    };
  }[];
}

export interface LoadMoreCard {
  id: "load_more";
  textBtn: string;
}

export interface QuizListMoviesProps {
  arrMovies: Movie[];
  isQuizActive: () => void;
  onLoadMoreCard: (onLoadMoreCard: string[]) => void;
}

export interface QuizQuestions {
  quiz: string;
  title: string;
  options: string[];
  page: number;
}

export interface QuizBtnsProps {
  answers: string[];
  collectQuiz: (item: string) => string[];
  isActive: boolean;
}

export interface MySliderBtnProps extends CustomArrowProps {
  prevStyle?: string;
}

import "./App.css";
import { useState, useEffect, useRef } from "react";
// import ProductCard from "./components/MovieCard";
// import MovieDetails from "./components/MovieDetails";

const products = [
  {
    id: 1,
    title: "Alexander the Great's Sword",
    description:
      "Sword carried by Alexander the Great during his Thracian campaign around 330BCE",
    image: "/public/AtG_Sword.jpg/",
    authenticity: True,
    price: "111000 TimeCredits" 
  },
  {
    id: 2,
    title: "Chamber of Secrets",
    description:
      "Harry returns to Hogwarts for his second year when a series of mysterious attacks puts students in danger and reveals the dark history of the school.",
    image: "/movies/movie2.jpg",
  },
  {
    id: 3,
    title: "Prisoner of Azkaban",
    description:
      "During his third year at Hogwarts, Harry learns about an escaped prisoner who is believed to be coming after him. As the year unfolds, Harry uncovers long hidden truths about his family, loyalty, and the events that shaped his past.",
    image: "/movies/movie3.jpg",
  },
  {
    id: 4,
    title: "Goblet of Fire",
    description:
      "Harry is unexpectedly selected to compete in the dangerous Triwizard Tournament. Faced with deadly tasks, political tension, and growing darkness, this year marks a turning point where the wizarding world begins to change forever.",
    image: "/movies/movie4.jpg",
  },
];

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    if (!selectedMovie) return;
    if (!detailsRef.current) return;

    detailsRef.current.scrollIntoView({
      behaviour: "smooth",
      block: "start",
    });
  }, [selectedMovie]);

  return (
    <div className="app">
      <h1>Netflix Cards</h1>

      <div className="movie-row">
        {movies.map((movie) => (
          <MovieCard
          key={movie.id}
          image={movie.image}
          title={movie.title}
          description={movie.description}
          onSelect={() => setSelectedMovie(movie)}
        />
        ))}

        {selectedMovie && 
        <div ref={detailsRef}> 
          <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)}/>
        </div>}

      </div>
    </div>
  );
}

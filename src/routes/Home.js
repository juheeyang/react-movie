import Loading from "../components/Loading";
import Movie from "../components/Movie";
import { useState, useEffect } from "react";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_ration=8&sort_by=year&page=2&genre=Animation`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    },[]);
    return (
        <div>
            <div>
                {loading ? 
                (
                    <Loading />
                ) : (
                    <div>
                        {movies.map((movie) => (
                            <Movie 
                                id={movie.id}
                                key={movie.id}
                                coverImg={movie.medium_cover_image}
                                title={movie.title}
                                summary={movie.summary}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
export default Home;
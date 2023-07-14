import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import styles from "../style.css";
import Loading from "../components/Loading";

function Detail() {
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const getMovie = async() => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    },[]);
    return (
        <div className={styles.container}>
            { loading ? (
                    <Loading />
                ) : (
                    <MovieDetails 
                        title={movie.title}
                        year={movie.year}
                        trailerLink={movie.yt_trailer_code}
                        bgImage={movie.background_image_original}
                        downloadCount={movie.download_count}
                        rating={movie.rating}
                    />
            )}
        </div>
    );
}

export default Detail;
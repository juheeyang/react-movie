import PropTypes from "prop-types";
import YouTube from "react-youtube";
import styles from "./MovieDetails.module.css";

function MovieDetails({title, year, trailerLink, bgImage, downloadCount, rating}) {
    return (
        <div>
            <img className={styles.bg} src={bgImage} />
            <div className={styles.show}>
                <h1>{`${title} (${year})`}</h1>
                <div className={styles.showBody}>
                    <YouTube videoId={trailerLink} />
                    <ul>
                        <li>{`👍 Rating | ${rating}`}</li>
                        <li>{`⬇️ Download Count | ${downloadCount}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

MovieDetails.proptype = {
    title : PropTypes.string.isRequired,
    year : PropTypes.string.isRequired,
    trailerLink : PropTypes.string.isRequired,
    bgImage : PropTypes.string.isRequired,
    downloadCount : PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired
};
export default MovieDetails;
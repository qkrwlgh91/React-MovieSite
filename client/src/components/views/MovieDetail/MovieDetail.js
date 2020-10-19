import React, {useState, useEffect} from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';
import MainImage from '../LandingPage/Sections/MainImage';
import MovieInfo from './Sections/MovieInfo';
import GridCards from '../commons/GridCards';
import { Row } from 'antd';

function MovieDetail(props) {

    let movieId = props.match.params.movieId;

    const [Movie, setMovie] = useState([]);
    const [Casts, setCasts] = useState([]);
    const [ActorToggle, setActorToggle] = useState(false)

    useEffect(() => {

        // console.log(props.match); Movie의 정보가 담겨있음 reouter에 /:movieId를 가져온것임?

        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setMovie(response);
            })

        fetch(endpointCrew)
        .then(response => response.json())
        .then(response => {
            console.log("endpointCrew", response);
            setCasts(response.cast);
            
        })

    }, []);

    const toggleActorView = () => {
        setActorToggle(!ActorToggle);
    }

    return (
        <div>

            {/* Header */}
            <MainImage 
                image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`} 
                title={Movie.original_title}
                text={Movie.overview}
            />

            {/* Body */}
            <div style={{ width: '85%', margin: '1rem auto' }}>

                {/* Movie Info */}
                <MovieInfo 
                    movie={Movie}
                />

                <br />
                {/* Actors Grid */}

                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <button onClick={toggleActorView}> Toggle Actor View </button>
                </div>

                {ActorToggle &&
                    <Row gutter={[16, 16]}>
                    {Casts && Casts.map((cast, index) => (
                        <React.Fragment key={index}>
                            <GridCards 
                                image={cast.profile_path ? 
                                    `${IMAGE_BASE_URL}w500${cast.profile_path}`
                                : null }
                                characterName={cast.name}
                            />
                        </React.Fragment>
                        ))}
                    </Row>
                }
                

            </div>
            
        </div>
    )
}

export default MovieDetail

import React, {useState, useEffect} from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../Config';

function MovieDetail(props) {

    let movieId = props.match.params.movieId;

    const [Movie, setMovie] = useState([]);

    useEffect(() => {

        // console.log(props.match); Movie의 정보가 담겨있음 reouter에 /:movieId를 가져온것임?

        let endpointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;

        let endpointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        fetch(endpointInfo)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setMovie(resposne);
            })

    }, [])

    return (
        <div>

            {/* Header */}

            {/* Body */}
            <div>
                
            </div>
            
        </div>
    )
}

export default MovieDetail

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    return (
        <div className='card'>
            {props.isPopular === 1 && <div className='card-badge'>Popular</div>}
            <img src={props.photo} alt="" className='card-photo'/>
            <div className='review'>
                <FontAwesomeIcon icon={faStar} className='star-icon'/>
                <span className='rating'>{props.rating}</span>
                <span className='gray'>({props.reviewCount})</span>
            </div>
            <p className='title'>{props.title}</p>
            <p className='cuisine gray'>{props.cuisine}</p>
        </div>
    )
}
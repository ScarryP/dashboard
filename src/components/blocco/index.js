import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faVideo, faPlus } from '@fortawesome/free-solid-svg-icons'

const Blocco = () => {
    return (
        <div className='blocco'>
            <p>Name <br />
                IP <br />
                Status <br/>
            </p>

            <FontAwesomeIcon icon={faVideo} className="videocamera" />

            <a href='edit'><FontAwesomeIcon icon={faPenToSquare} className="penToSquare" /></a>
            <a href='details'><FontAwesomeIcon icon={faPlus} className="plus" /></a>
        </div>
    );
}

export default Blocco;
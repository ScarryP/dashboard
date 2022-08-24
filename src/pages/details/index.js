import { faChevronDown, faPenToSquare, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Details = () => {
    return (
        <div>
            <h2>
                Dettagli
                <FontAwesomeIcon icon={faChevronDown} className="arrow" />
            </h2>
            <div className='card'>
                <div className='rowCard'>
                    <div className='cardTitle'>
                        Scheda
                        <FontAwesomeIcon icon={faCircle} className="statusCircle" />
                    </div>
                    <div>
                        <a href="edit"><FontAwesomeIcon icon={faPenToSquare} className="editPen" /></a>
                    </div>
                </div>
                <div className='rowCard'>
                    <div className='cardInfo'>
                        <div>IP</div>
                        <div>Tensione 1</div>
                        <div>Tensione 2</div>
                        <div>Tensione 3</div>
                        <div>Tensione 4</div>
                        <div>Tensione 5</div>
                        <div>Temperatura</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
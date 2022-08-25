import './style.css';
import Blocco from '../../components/blocco';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    return (
        <div>
            <h1>Telecamere
                <FontAwesomeIcon icon={faCirclePlay} className="play" />
            </h1>

            <div className='table'>

                <div className='tableCell'><Blocco /></div>
                <div className='tableCell'><Blocco /></div>
                <div className='tableCell'><Blocco /></div>
                <div className='tableCell'><Blocco /></div>
                <div className='tableCell'><Blocco /></div>
                <div className='tableCell'><Blocco /></div>
                <div className='tableCell'><Blocco /></div>
                <div className='tableCell'><Blocco /></div>

            </div>


        </div>
    );
}

export default Dashboard;
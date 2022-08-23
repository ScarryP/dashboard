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

            <table>
                <tr>
                    <td><Blocco /></td>
                    <td><Blocco /></td>
                </tr>
                <tr>
                    <td><Blocco /></td>
                    <td><Blocco /></td>
                </tr>
                <tr>
                    <td><Blocco /></td>
                    <td><Blocco /></td>
                </tr>
                <tr>
                    <td><Blocco /></td>
                    <td><Blocco /></td>
                </tr>

            </table>
            

        </div>
    );
}

export default Dashboard;
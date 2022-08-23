import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import './style.css';

const Edit = () => {
    return (
        <div>
            <h1>
                ciao io sono edit
                <FontAwesomeIcon icon={faEdit} className = "pencil"/>

            </h1>
        </div>
    );
}

export default Edit;
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './style.css';

const Login = () => {
    return (
        <div>
            <h2>
                Login
                <FontAwesomeIcon icon={faRightToBracket} className="rightToBracket" />
            </h2>
            <div className='loginCard'>
                <form action="">
                    <div className='email'>
                        <label type="email">Email</label><br />
                        <input type="text" name="email" className='input' placeholder='email' />
                    </div>
                    <div className='password'>
                        Password <br />
                        <input type="password" placeholder='password' className='input' />
                    </div>
                    <div className='divButton'>
                        <a href="/dashboard">
                            <input type='button' className='joinButton' value="GO" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

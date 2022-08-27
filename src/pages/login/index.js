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
                    <div className='inputDiv'>
                        <div className='label'>Server Address</div>
                        <input type="text" placeholder='address' className='input' />
                    </div>
                    <div className='inputDiv'>
                        <div className='label'><label type="text">Username</label></div>
                        <input type="text" name="email" placeholder='username' className='input' />
                    </div>
                    <div className='inputDiv'>
                        <div className='label'>Password</div>
                        <input type="password" placeholder='password' className='input' />
                    </div>
            
                    <div className='divButton'>
                        <a href="/dashboard">
                            <input type='button' className='joinButton' value="Login" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import styles from './Login.module.css';
import stylesHeader from '../Header/Header.module.css';
import {AppStateType} from '../../redux/store';
import Preloader from '../common/Preloader/Preloader';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [captcha, setCaptcha] = useState('');

    const captchaUrl = useSelector((state: AppStateType): string | null | undefined =>
        state.authReducer.captchaUrl);
    const isLoading = useSelector((state: AppStateType): boolean => state.reducer.isLoading);
    const error = useSelector((state: AppStateType): string => state.authReducer.authError);

    const dispatch = useDispatch();

    return (<>
        {isLoading
            ? <Preloader height={'100vh'}/>
            : <div className={styles.login}>
                <div className={styles.info}>
                    <h1>TODOLIST</h1>
                    <p>For test this app, enter</p>
                    <p>Login: <b>free@samuraijs.com</b></p>
                    <p>Password: <b>free</b></p>
                </div>

                {error && <div className={stylesHeader.error}>
                    Error: {error}
                </div>}

                <input type='email' className={styles.input}
                       onChange={e => setEmail(e.currentTarget.value)}
                       value={email} placeholder={'Email'}/>
                <input type='password' className={styles.input}
                       onChange={e => setPassword(e.currentTarget.value)}
                       value={password} placeholder={'Password'}/>
                <div className={styles.checkbox}>
                    <label>
                        <input type='checkbox' checked={rememberMe}
                               onChange={e => setRememberMe(e.currentTarget.checked)}/>
                        <span>remember me</span>
                    </label>
                </div>

                {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
                {captchaUrl && <input className={styles.input} type='text'
                                      onChange={e => setCaptcha(e.currentTarget.value)}
                                      value={captcha} placeholder={'Enter captcha'}/>}

                <div>
                    <button className={styles.button}
                            onClick={() => dispatch(login(email, password, rememberMe, captcha))}>
                        Login
                    </button>
                </div>
            </div>}
    </>)
};

export default Login;
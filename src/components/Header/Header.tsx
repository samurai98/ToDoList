import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthUserData, login} from '../../redux/auth-reducer';
import styles from './Header.module.css';
import {AppStateType} from "../../redux/store";
import Preloader from "../common/Preloader/Preloader";

const Header = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [captcha, setCaptcha] = useState('');

    const captchaUrl = useSelector((state: AppStateType): string | null | undefined =>
        state.authReducer.captchaUrl);
    const isLoading = useSelector((state: AppStateType): boolean => state.reducer.isLoading);

    const dispatch = useDispatch();


    return (<div className={styles.header}>
        HEADER
    </div>)
};

export default Header;
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/auth-reducer';
import styles from './Header.module.css';
import {AppStateType} from "../../redux/store";

const Header = () => {

    const error = useSelector((state: AppStateType): string =>
        state.reducer.error);
    const login = useSelector((state: AppStateType): string | null | undefined => state.authReducer.login);

    const dispatch = useDispatch();


    return (<>
        <div className={styles.header}>
            {error ? <div className={styles.error}> Error: {error} </div> : <div> </div>}

            <div className={styles.main}>
                <div className={styles.userInfo}>
                    Welcome, <b>{login}</b>
                </div>
                <button className={styles.logout}
                        onClick={() => dispatch(logout())}>Logout
                </button>
            </div>
        </div>
    </>)
};

export default Header;
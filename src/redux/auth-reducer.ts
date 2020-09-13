import {api} from '../api/api';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppStateType} from './store';
import {setToDoLists} from "./reducer";

const SET_USER_DATA = 'TodoAPP/Todolist/auth/SET-USER-DATA';
const GET_CAPTCHA_URL = 'TodoAPP/Todolist/auth/GET-CAPTCHA-URL-SUCCESS';

type InitialStateType = {
    userId?: string | null
    email?: string | null
    login?: string | null
    isAuth?: boolean
    captchaUrl?: string | null
}

const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: action.isAuth
            };
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            };
        default:
            return state;
    }
};

type ActionsType =
    setAuthUserDataActionType
    | getCaptchaUrlSuccessActionType

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL
    captchaUrl: string
}

// ActionCreators

export const setAuthUserData = (userId: string | null, email: string | null,
                                login: string | null, isAuth: boolean): setAuthUserDataActionType =>
    ({type: SET_USER_DATA, userId, email, login, isAuth});

export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType =>
    ({type: GET_CAPTCHA_URL, captchaUrl});

// Thunk

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>;

export const getAuthUserData = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    let response = await api.me();
    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
        dispatch(setToDoLists());
    }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType =>
    async (dispatch: ThunkDispatchType) => {
        const response = await api.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error';
            //dispatch(stopSubmit('login', {_error: message}));
        }
    };

export const getCaptchaUrl = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    const response = await api.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch: ThunkDispatchType) => {
    let response = await api.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export default authReducer;
export const DATACOMMON = 'dataCommon';
export const TOKEN = 'authentication';
export const AUTH_HEADER_KEY = 'Authorization';
export const AUTH_PREFIX = 'Bearer';
export const LANGUAGE = 'language';

export const ACTION_LOGOUT = "LOGOUT"
export const ACTION_LOGIN = "LOGIN"
export const ACTION_ROUTE_TITLE = "ROUTE_TITLE"

export const LANGUAGE_EN = { "key": "en", "value": "English" }
export const LANGUAGE_IN = { "key": "in", "value": "Indonesia" }
export const LANGUAGE_DEFAULT = LANGUAGE_IN

export const KEY_CAPTCHA_LOCAL = '6LcOuyYTAAAAAHTjFuqhA52fmfJ_j5iFk5PsfXaU'
export const KEY_CAPTCHA_PRODUCT = '6LfvKXsUAAAAAOOszKkgd4w4FS7QYTSc27mMGoUF'
export const KEY_CAPTCHA_SECRET = '6LfvKXsUAAAAACA916c1FL_QRTzvmQtWTgCTPpmO'

export interface loginState {
    state: boolean,
    userName?: string,
    token?: string,
    registeredBy?: any,
    companyId?: number
}

export interface languageSate {
    key: any,
    value: any
}

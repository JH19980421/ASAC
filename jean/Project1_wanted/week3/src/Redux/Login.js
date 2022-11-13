export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const init = localStorage.getItem('Login');

export default function Login(state = init, action) {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('Login', true);
            return true;
        case LOGOUT:
            localStorage.setItem('Login', false);
            return false;
        default:
            return state;
    }
}

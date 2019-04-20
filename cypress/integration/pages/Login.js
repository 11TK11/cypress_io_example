const loginBtn = { selector:'a', text: 'Log In' };
const userTxt  = '#user';
const passwordTxt = '#password';
const loginForm = '#login-form';

export default class Login {

    static get loginBtn() {
        return loginBtn;
    }

    static get userTxt() {
        return userTxt;
    }

    static get passwordTxt() {
        return passwordTxt;
    }

    static get loginForm() {
        return loginForm;
    }
}
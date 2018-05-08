
import * as C from '../Models/Utils/Constants';

export class Language {
    
    public static instance: Language;

    //LoginComponent
    public login: String;
    public rememberMe: String;
    public needHelp: String;
    
    //SignupComponent
    public signup: String;
    public termsAndConditions;
    public termsAndConditionsLink;
    
    public searchBar: String;
    public setLang: String;

    //Login&Signup
    public eMail: String;
    public password: String;
    public confirmPassword: String;
    
    public constructor() { }
    
    static getInstance() {
        if(!Language.instance) {
            Language.instance = new Language();
        }
        //LoginComponent
        Language.instance.login = Language.instance.setWords("Ingresar", "Log In");
        Language.instance.rememberMe = Language.instance.setWords('Recordarme', 'Remember me');
        Language.instance.needHelp = Language.instance.setWords('¿Necesitas ayuda?', 'Need help?');
        //SignupComponent
        Language.instance.signup = Language.instance.setWords("Registrar", "Sign Up");
        Language.instance.termsAndConditions = Language.instance.setWords("Acepto los ", "I accept the ");
        Language.instance.termsAndConditionsLink = Language.instance.setWords("Términos y condiciones", "Terms and conditions");

        Language.instance.searchBar = Language.instance.setWords("Buscar", "Search");
        Language.instance.setLang = Language.instance.setWords("On English", "En Español");

        //Login&Signup
        Language.instance.eMail = Language.instance.setWords('Correo electrónico', 'E-mail');
        Language.instance.password = Language.instance.setWords('Contraseña', 'Password');
        Language.instance.confirmPassword = Language.instance.setWords('Confirmar contraseña', 'Confirm password');
        return Language.instance;
    }

    getLang(): String {
        return localStorage.getItem(C.KEY_LANG);
    }

    setWords(spanish, english): String {
        return Language.instance.getLang() == 'Spanish' ? spanish : english;
    }
}

import { Subject, Observable } from "rxjs/Rx";
import * as C from '../Models/Utils/Constants';

export class Language {
    
    public static instance: Language;

    //LoginComponent
    public login: String;
    public rememberMe: String;
    public needHelp: String;
    
    //SignupComponent
    public signup: String;
    public searchBar: String;
    public setLang: String;
    
    public constructor() { }
    
    static getInstance() {
        if(!Language.instance) {
            Language.instance = new Language();
        }
        //LoginComponent
        Language.instance.login = Language.instance.getLang() == "Spanish" ? "Ingresar" : "Login";
        Language.instance.rememberMe = Language.instance.getLang() =="Spanish" ? "Recordarme" : "Remenber me";
        Language.instance.needHelp = Language.instance.getLang() =="Spanish" ? "¿Necesitas ayuda?" : "Need help?";
        Language.instance.signup = Language.instance.getLang() == "Spanish" ? "Registrar" : "Signup";
        Language.instance.searchBar = Language.instance.getLang() == "Spanish" ? "Buscar" : "Search";
        Language.instance.setLang = Language.instance.getLang() == "Spanish" ? "On English" : "En Español";
        return Language.instance;
    }

    getLang(): String {
        return localStorage.getItem(C.KEY_LANG);
    }
}
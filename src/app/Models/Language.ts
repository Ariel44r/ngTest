
import { Subject, Observable } from "rxjs/Rx";
import { CanActivate } from "@angular/router";

export class Language {
    
    public static instance: Language;

    public login: String;
    public signup: String;
    public searchBar: String;
    public setLang: String;
    
    public constructor() { }
    
    static getInstance() {
        if(!Language.instance) {
            Language.instance = new Language();
        }
        Language.instance.login = Language.instance.getLang() == "Spanish" ? "Ingresar" : "Login";
        Language.instance.signup = Language.instance.getLang() == "Spanish" ? "Registrar" : "Signup";
        Language.instance.searchBar = Language.instance.getLang() == "Spanish" ? "Buscar" : "Search";
        Language.instance.setLang = Language.instance.getLang() == "Spanish" ? "On English" : "En Español";
        return Language.instance;
    }

    getLang(): String {
        return localStorage.getItem('langCVFranklin');
    }
}
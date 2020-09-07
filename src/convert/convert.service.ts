import { Injectable } from '@nestjs/common';

@Injectable()
export class ConvertService {

    /*création de la fonction de convertion
    récuperer un nombre en paramètre
     */
    integer_to_roman(num:number): string {

        //nombre conversion des chiffre en string et sépare dans un tableau
        const digits = String(+num).split("");
        //tableau des chiffres romains
        const key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                "","I","II","III","IV","V","VI","VII","VIII","IX"];
        let roman_num = "";
        let i = 3;
        //boucle de conversion des chiffres arabe en romain
        while (i--)
            //parcours le tableau pour trouver le bon nombre  romain
            roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
        //prend toute les valeurs du tableau pour le joindre entre eux avec ou non un symbole  et renvoie un string
        return Array(+digits.join("") + 1).join("M") + roman_num;
    }
}

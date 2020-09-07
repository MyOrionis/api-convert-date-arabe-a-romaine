import { Injectable } from '@nestjs/common';

@Injectable()
export class ConvertService {

    /*création de la fonction de convertion
    récupereration d'un nombre en paramètre
     */
    integer_to_roman(num:number) {
    //définition du tableau de convertion
      const romain = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
      //définition de ma variable de résultat à retourner
    let res = '';

    //Boucle qui parcours le tableau romain
      // i = la clé du tableau
    for (const i of Object.keys(romain)) {
      // q récupere la valeur arrondit la plus basse du quotient de la division
      const q = Math.floor(num / romain[i]);
      //Soustrait la valeur de i multiplier par la valeur q
      num -= q * romain[i];
      //Ajoute le chiffre romain à la variable res
      res += i.repeat(q);
    }

    return res;
  }
}

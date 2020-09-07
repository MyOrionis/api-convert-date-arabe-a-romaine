import { Controller,Get, Param, Res } from '@nestjs/common';
import {ConvertService} from "./convert.service";



//localhost:3000/convert
@Controller('convert')
export class ConvertController {
    //appel de l'instance convert.Service
    constructor(private readonly convertService: ConvertService) {}

    //requete de récupération de date en format Arabe
    @Get(':DD/:MM/:YYYY')
    //fonction de convertion et d'affichage
    convertToRomanNumbers(@Param('DD') day,@Param('MM') month,@Param('YYYY') year, @Res() response) {
        //teste des valeurs
        if(isNaN(day) || isNaN(month) || isNaN(year)) {
            //répond par une erreur
            response.status(422).send();
        } else {
            //répond par la date en format romaine
            response.status(200).send(this.convertService.integer_to_roman(day)+"/"+this.convertService.integer_to_roman(month)+"/"+this.convertService.integer_to_roman(year))
        }
    }


}

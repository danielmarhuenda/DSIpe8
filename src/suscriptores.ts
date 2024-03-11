import { Observable } from "./noticias.js";
  
/**
 * @interface EmisorInformacion es una clave-valor que
 * define qué información recibió y de qué emisor que está observando
 */
export interface EmisorInformacion {
    Revista: string;
    Info: string;
}


export class Suscriptor{
    private info_recibida:EmisorInformacion[] = [];


    update(observable: Observable, informacion:string):boolean{
        let info:EmisorInformacion = {Revista:observable.nombre, Info:informacion};
        this.info_recibida.push(info);
        return true;
    }


    GetInfo():EmisorInformacion[]{
        let result:EmisorInformacion[] = [];
        for(var i of this.info_recibida){
            result.push(i);
        }
        return result;
    }
}
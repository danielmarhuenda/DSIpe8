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

    /**
     * Alguien de quien está suscrito ese suscriptor le ha avisado de información nueva, guarda quién y qué notificó
     * @param observable Quién está notificando
     * @param informacion Información a notificar
     * @returns 
     */
    update(observable: Observable, informacion:string):boolean{
        let info:EmisorInformacion = {Revista:observable.nombre, Info:informacion};
        this.info_recibida.push(info);
        return true;
    }

    /**
     * Función para comprobar en tests qué información ha recibido este suscriptor
     * @returns 
     */
    GetInfo():EmisorInformacion[]{
        let result:EmisorInformacion[] = [];
        for(var i of this.info_recibida){
            result.push(i);
        }
        return result;
    }
}
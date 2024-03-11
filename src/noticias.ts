import { Suscriptor } from "./suscriptores.js";

/**
 * Interface for observable classes
 */
export interface Observable {
    nombre:string;
    subscribe(suscriptor: Suscriptor): void;
    unsubscribe(suscriptor: Suscriptor): void;
    notify(informacion: string): void;
}


export class Noticias implements Observable{
    private suscriptores:Suscriptor[] = [];
    nombre:string = "";

    /**
     * Constructor de la clase Noticias
     * @param nombre Nombre del noticiero
     */
    constructor(nombre:string){
        this.nombre = nombre;
    }

    /**
     * Suscribe alguien a la revista
     * @param suscriptor Persona a suscribir
     * @returns 
     */
    subscribe(suscriptor:Suscriptor):void{
        this.suscriptores.push(suscriptor);
        return;
    }

    /**
     * Desuscribe a alguien de la revista
     * @param suscriptor Suscriptor a eliminar
     * @returns 
     */
    unsubscribe(suscriptor: Suscriptor): void {
        for(let i:number = 0; i < this.suscriptores.length; i++){
            if(this.suscriptores[i] == suscriptor){
                this.suscriptores.splice(i, 1);
            }
        }
        return;
    }

    /**
     * Avisa a los suscriptores que hay una nueva revista
     * @param noticia Noticia publicada
     * @returns 
     */
    notify(noticia:string): void {
        for(var i of this.suscriptores){
            i.update(this, noticia);
        }
        return;
    }

    /**
     * Publicar una noticia
     * @param noticia Noticia a publicar
     * @returns 
     */
    Publicar(noticia:string):void{
        //Hago cosas de publicar
        this.notify(noticia);
        return;
    }

    /**
     * Suscriptores actuales a la revista para poder comprobar en tests
     * @returns 
     */
    GetSuscriptores():Suscriptor[]{
        return this.suscriptores;
    }
}


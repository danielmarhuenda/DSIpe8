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

    constructor(nombre:string){
        this.nombre = nombre;
    }

    subscribe(suscriptor:Suscriptor):void{
        this.suscriptores.push(suscriptor);
        return;
    }


    unsubscribe(suscriptor: Suscriptor): void {
        for(let i:number = 0; i < this.suscriptores.length; i++){
            if(this.suscriptores[i] == suscriptor){
                this.suscriptores.splice(i, 1);
            }
        }
        return;
    }


    notify(noticia:string): void {
        for(var i of this.suscriptores){
            i.update(this, noticia);
        }
        return;
    }


    Publicar(noticia:string):void{
        //Hago cosas de publicar
        this.notify(noticia);
        return;
    }

    GetSuscriptores():Suscriptor[]{
        return this.suscriptores;
    }
}


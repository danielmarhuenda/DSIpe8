# DSIpe8

Para este ejercicio se nos pidió hacer un feed de noticias con gestor de suscriptores, para esto fue necesario respetar el patrón de diseño Observer, para esto creé las interfaces Observable y Observer:  

```typescript
interface Observable {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

interface Observer {
  update(observable: Observable): void;
}
```  

Ya que la clase Noticias sólo va a tener observers del tipo Suscriptor decidí eliminar la interfaz Observer y poner directamente la clase Suscriptor, pero una persona puede estar suscrita a cosas que no sean Noticias, así que dejé la interfaz Observable, sólo cambiandola para ayudar al ejercicio, diciendo a notify qué información se va a enviar al suscriptor, y añadir el nombre para que el suscriptor sepa de dónde viene esa información:  

```typescript
export interface Observable {
    nombre:string;
    subscribe(suscriptor: Suscriptor): void;
    unsubscribe(suscriptor: Suscriptor): void;
    notify(informacion: string): void;
}
```

En la clase Suscriptor creé una interfaz llamada EmisorInformacion para usarla dentro de la clase para almacenar de dónde vino cada información que se recibió, además de cambiar la función update para añadir el recibir por parámetro la noticia de la que se le está notificando:  

```typescript
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
    ...

```

Tuve problemas a la hora de hacer tests, dice que dos cosas iguales son distintas:  
```AssertionError: expected { Revista: 'Revista', Info: 'Noticia' } to equal { Revista: 'Revista', Info: 'Noticia' }```  

En este test miro si se añadió bien información al suscriptor mediante update, y al hacer el test aparece que no, pero en el propio mensaje de error se ve el mismo contenido dos veces.  

Probé a hacer otro test, pero de la clase noticias, para comprobar si era sólo un error de la clase suscriptor y ocurrió lo mismo, así que no. Aquí probé a añadir un suscriptor dummy a la lista de suscriptores del noticiero:  
``` AssertionError: expected [ Suscriptor{ info_recibida: [] } ] to equal [ Suscriptor{ info_recibida: [] } ] ```

Lo mismo con el unsuscribe: 
``` AssertionError: expected [] to equal [] ```
import 'mocha';
import { expect } from 'chai';
import { Noticias } from '../src/noticias.js';
import { Suscriptor} from "../src/suscriptores.js"

//Dummy para poner por parámetro
let noticiero:Noticias = new Noticias("Revista");


let suscriptor:Suscriptor = new Suscriptor;


describe("Prueba update", () => {
    
    it("Se añadió la noticia", () => {
        expect(suscriptor.update(noticiero, "Noticia")).to.equal(true);

        expect(suscriptor.GetInfo()[0]).to.equal({ Revista: "Revista", Info: "Noticia" });
        

    });

});

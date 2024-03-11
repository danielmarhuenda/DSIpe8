import 'mocha';
import { expect } from 'chai';
import { Noticias } from '../src/noticias.js';
import { Suscriptor} from "../src/suscriptores.js"

//Dummy para poner por parámetro
let suscriptor:Suscriptor = new Suscriptor;

let noticiero:Noticias = new Noticias("Revista");

describe("Prueba suscribe", () => {
    
    it("Se añadió un suscriptor", () => {
        noticiero.subscribe(suscriptor);

        expect(noticiero.GetSuscriptores()).to.equal([suscriptor]);

    });

    it("Se eliminó un suscriptor", () => {
        noticiero.unsubscribe(suscriptor);

        expect(noticiero.GetSuscriptores()).to.equal([]);
    });

});



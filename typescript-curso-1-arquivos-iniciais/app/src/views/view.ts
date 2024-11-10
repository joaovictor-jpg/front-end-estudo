import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecução } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemente = document.querySelector(seletor);
        if (elemente) {
            this.elemento = elemente as HTMLElement;
        } else {
            throw new Error(`Seletor ${seletor} não existe no DOM. Verifique para o desenvolvedor`);
        }
    }

    @inspect()
    @logarTempoDeExecução(true)
    update(model: T) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
        
    }

    protected abstract template(model: T): string;
}
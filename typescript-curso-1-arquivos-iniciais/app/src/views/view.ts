import { logarTempoDeExecução } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar = false

    constructor(seletor: string, escapar?: boolean) {
        const elemente = document.querySelector(seletor);
        if (elemente) {
            this.elemento = elemente as HTMLElement;
        } else {
            throw new Error(`Seletor ${seletor} não existe no DOM. Verifique para o desenvolvedor`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }

    @logarTempoDeExecução()
    update(model: T) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.elemento.innerHTML = template;
        
    }

    protected abstract template(model: T): string;
}
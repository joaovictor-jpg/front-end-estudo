export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemente = document.querySelector(seletor);
        if (elemente) {
            this.elemento = elemente;
        }
        else {
            throw new Error(`Seletor ${seletor} não existe no DOM. Verifique para o desenvolvedor`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}

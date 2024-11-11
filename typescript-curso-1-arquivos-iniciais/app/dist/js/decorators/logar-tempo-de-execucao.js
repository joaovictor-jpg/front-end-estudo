export function logarTempoDeExecução(emSegundo = false) {
    return function (target, propetyKey, descriptor) {
        let divisor = 1;
        let unidade = "milisegundos";
        if (emSegundo) {
            divisor = 1000;
            unidade = "segundos";
        }
        const metoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propetyKey}, tempo de exeção: ${(t2 - t1) / divisor} ${unidade}`);
            retorno;
        };
        return descriptor;
    };
}
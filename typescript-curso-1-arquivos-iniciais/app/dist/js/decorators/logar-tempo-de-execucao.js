export function logarTempoDeExecução() {
    return function (target, propetyKey, descriptor) {
        const metoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propetyKey}, tempo de exeção: ${(t2 - t1) / 1000} segundo`);
            retorno;
        };
        return descriptor;
    };
}

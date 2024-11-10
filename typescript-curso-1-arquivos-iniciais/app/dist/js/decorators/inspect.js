export function inspect() {
    return function (target, propetyKey, descriptor) {
        const metoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Método ${propetyKey}`);
            console.log(`---- parâmetros: ${JSON.stringify(args)}`);
            const retorno = metoOriginal.apply(this, args);
            console.log(`----- retorno: ${JSON.stringify(retorno)}`);
        };
        return descriptor;
    };
}

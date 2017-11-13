export function isArray(variable) {
    return variable instanceof Array
}

export function isDefined(variable){
    return typeof variable !== 'undefned' && variable !== null
}

export function isFunction (varieable){
    return typeof variable === 'function'
}

export function isObject(variable){
    return isDefined(variable) & typeof variable === 'object'
}
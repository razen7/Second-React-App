function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&')
}

function unionRegExp(arr) {
    return arr.map(w => escapeRegExp(w)).join('|')
}
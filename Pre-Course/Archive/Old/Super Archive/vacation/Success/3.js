function invert(str) {
    return str.split('').reverse().map(v => v === v.toLowerCase() ? v.toUpperCase() : v.toLowerCase()).join('')

}
console.log(
    invert("dLROW YM sI HsEt"), // ➞ "TeSh iS my worlD"

    invert("ytInIUgAsnOc"), // ➞ "CoNSaGuiNiTY"

    invert("step on NO PETS"), // ➞ "step on NO PETS"

    invert("XeLPMoC YTiReTXeD"), // ➞ "dExtErIty cOmplEx"
)
const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{
    currency: "EUR",
    style: "currency"
})

export function formatCurrencry(number: number){
    return CURRENCY_FORMATTER.format(number)
}
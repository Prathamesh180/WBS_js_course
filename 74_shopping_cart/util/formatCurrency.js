const formatter  = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD"
})

export default function formatCurrency(amount){
    return formatter.format(amount)
}
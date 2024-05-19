export default defineEventHandler(async (event) => {

    const { code } = event.context.params
    const { currencyKey } = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/currencies?apikey=${currencyKey}&currencies=${code}`
    // https://api.currencyapi.com/v3/currencies?apikey=cur_live_bO3JAs7xFfq02GaH2UnmFqQlL6ECYiSMKg2oyvR1&currencies=EUR%2CUSD%2CCAD
    const { data } = await $fetch(uri)

    return data

})
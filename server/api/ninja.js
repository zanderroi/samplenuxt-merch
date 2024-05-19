export default defineEventHandler(async (event) => {

    //handle query params

    // const { name } = getQuery(event)

    // //handle post data

    // const { age } = await readBody(event)

    // //api call with private key

    const { data } =  await $fetch('https://api.currencyapi.com/v3/currencies?apikey=cur_live_bO3JAs7xFfq02GaH2UnmFqQlL6ECYiSMKg2oyvR1&currencies=EUR%2CUSD%2CCAD')

    return data
})
<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
      accusantium quo illo hic id nesciunt iusto veritatis nisi. Earum ducimus
      error nam, suscipit quis voluptates! Doloremque pariatur incidunt minus
      ipsum.
    </p>
   <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/EUR')
</script>
<style scoped></style>

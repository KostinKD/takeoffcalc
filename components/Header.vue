<template>
  <div class="card">
    <PrimeMenubar :model="items">
      <template #end>
        <div class="flex align-items-center gap-2">
          <PrimeAvatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
        </div>
      </template>
    </PrimeMenubar>
  </div>

</template>

<script setup>
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'About',
    icon: 'pi pi-star'
  },
])

</script>
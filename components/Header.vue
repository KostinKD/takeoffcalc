<template>
  <div class="card">
    <PrimeMenubar :model="items">
      <template #end>
        <div class="flex align-items-center gap-2">
<!--          <PrimeAvatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />-->
          <PrimeButton label="Login" icon="pi pi-user">

          </PrimeButton>
        </div>
      </template>
    </PrimeMenubar>

    <Login></Login>
  </div>

</template>

<script setup>


import Login from "./Login/Login.vue";

const router = useRouter()

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => {
      router.push({path: '/'})
    }
  },
  {
    label: 'About',
    icon: 'pi pi-exclamation-circle',
    command: () => {
      router.push({path: '/about'})
    }
  },
  {
    label: 'Changelog',
    icon: 'pi pi-tag',
    command: () => {
      router.push({path: '/changelog'})
    }
  }
])

</script>
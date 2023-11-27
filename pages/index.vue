<template>
  <div class="Main">
    <div class="w-screen h-screen flex justify-center">
      <div class="grid w-screen">
        <div class="col-1">
        </div>
        <div class="col justify-center text-center">
          <Card style="width: 100%" class="flex justify-content-center">
            <template #title>
              Take off calculator
            </template>
            <template #content>
              <p>
                <Button @click="LoadFP">Load FP</Button>
              </p>
                <span class="p-float-label">
                    <InputText id="ICAO" placeholder="ICAO"/>
                    <label for="ICAO">ICAO</label>
                </span>
              <Dropdown optionLabel="Runway" placeholder="Select a runway" class="w-full md:w-14rem">

              </Dropdown>
            </template>
          </Card>
        </div>
        <div class="col-1">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {useFetch} from "nuxt/app";

const SimBriefID = ref(705716)
const Flight_Plan = ref(null)

async function LoadFP() {
  const flight_plan = await useFetch(`https://www.simbrief.com/api/xml.fetcher.php?userid=${SimBriefID.value}&json=1`).catch(e => {
    console.log('Something went wrong')
  })
  Flight_Plan.value = flight_plan.data.value
  console.log('flight_plan', flight_plan.data.value)
}
async function GetDataICAO(){

}

</script>
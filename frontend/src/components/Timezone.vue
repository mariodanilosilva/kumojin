<template>
  <div class="timezone">
    <Time v-if="date.time" :time="date.time" :timezone="date.timezone"/>
    <Time v-if="date.time" :time="date.time"/>
  </div>
</template>

<script>
import axios from 'axios'
import Time from './Time'

export default {
  name: 'Timezone',
  components: {Time},
  inject: {
    BACKEND: {
      from: 'BACKEND'
    }
  },
  data: () => ({
    date: {}
  }),
  async created () {
    await this.getTimezone()
  },
  methods: {
    async getTimezone () {
      const response = await axios.get(this.BACKEND + '/timezone').then(response => response.data)
      const {timezone, time} = response
      if (timezone && time) this.date = {timezone, time}
    }
  }
}
</script>

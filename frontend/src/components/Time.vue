<template>
  <div class="time">
    <h2>{{ timeZone + ': ' + showTime }}</h2>
  </div>
</template>

<script>
import moment from 'moment'
import momentTz from  'moment-timezone'

export default {
  name: 'Time',
  props: {
    time: {
      type: String,
      required: true
    },
    timezone: {
      type: String
    }
  },
  computed: {
    timeZone () {
      return this.timezone || momentTz.tz.guess()
    },
    showTime () {
      return moment.tz(this.time, this.timeZone).format('LLL')
    }
  }
}
</script>

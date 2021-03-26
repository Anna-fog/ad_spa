<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Orders</h1>
        <v-list subheader two-line class="elevation-10">
          <v-list-tile
          avatar
          v-for="order in orders"
          :key="orders.id"
          >
            <v-list-tile-action>
              <v-checkbox
                color="success"
                :input-value="order.done"
                @change="markDown(order)"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content @click="notifications = !notifications">
              <v-list-tile-title>{{ order.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ order.phone }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                :to="'/ad/' + order.adId"
                class="primary">Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>

        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id: 's5fg',
          name: 'Morkl',
          phone: '9-034-232-32',
          adId: '123',
          done: 'false'
        }
      ]
    }
  },
  methods: {
    markDown (order) {
      order.done = true
    }
  }
}
</script>

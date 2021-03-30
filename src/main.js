import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyACdTFyTBFRfMLwl8i48MgVWVlasRvL1ok',
      authDomain: 'ads-app.firebaseapp.com',
      databaseURL: 'https://ads-app.firebaseio.com',
      projectId: 'ads-app-c343c',
      storageBucket: 'ads-app.appspot.com',
      messagingSenderId: '65761200833'
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})

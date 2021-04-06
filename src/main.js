import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'
import BuyModal from './components/Shared/BuyModal'

Vue.use(Vuetify)
Vue.component('BuyModal', BuyModal)
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
      projectId: 'ads-app-c343c',
      authDomain: 'ads-app-c343c.firebaseapp.com',
      databaseURL: 'https://ads-app-c343c-default-rtdb.europe-west1.firebasedatabase.app/',
      storageBucket: 'ads-app-c343c.appspot.com',
      messagingSenderId: '65761200833'
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})

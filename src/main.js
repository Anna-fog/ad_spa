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
      apiKey: 'AIzaSyDOCAbC123dEf456GhI789jKl01-MnO',
      authDomain: 'myapp-project-123.firebaseapp.com',
      databaseURL: 'https://myapp-project-123.firebaseio.com',
      projectId: 'myapp-project-123',
      storageBucket: 'myapp-project-123.appspot.com',
      messagingSenderId: '65211879809',
      appId: '1:65211879909:web:3ae38ef1cdcb2e01fe5f0c',
      measurementId: 'G-8GSGZQ44ST'
    })
  }
})

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="9">  <v-text-field v-model="value" outlined></v-text-field></v-col>
          <v-col cols="3">  <v-btn @click="getDataFromApi">Search</v-btn> </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mt-2">
            <v-col cols="4">
                <v-row>
                    <v-col cols="12" v-for="(item, index) in data" :key="index">
                      <v-card :disabled="count == '13'? true:false" :color="activeIndex == index ? 'success': ''">
                        <v-card-text @click="itemClick(item,index+1, index), count+=1" >{{item.name}}</v-card-text>
                      </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="8">
              <detailPage :detail=mm>
              </detailPage>
            </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import detailPage from './views/displayIndividual'

export default {
  name: 'App',

  components: {
   detailPage
  },

  data: () => ({
    data: [],
    value: '',
    id: '',
    mm: [],
    count: 0,
    color: null,
    activeIndex: null
  }),
   methods: {
    getDataFromApi () {
      if(this.value){
      this.$store.dispatch('get_data_from_api', this.value)
        .then(response => {
          console.log(response.results)
          this.data = response.results
          this.value = ''
        }).catch(error => {
          this.value = ''
          console.log(error)
        })
      }
    },
    itemClick (item, number, index) {
      // this.id = number
      this.activeIndex = index
      this.color = 'grey'
      console.log(number)
      this.$store.dispatch('detailOfPeople', number)
        .then(response => {
          this.mm = response
          console.log(response)
        })
    }
  }
};
</script>

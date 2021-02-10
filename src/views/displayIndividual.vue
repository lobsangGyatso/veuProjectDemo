<template>
    <v-container>
        <v-card :height="detail != ''?'500':'0'" class="pa-2">
            <div> name: {{detail.name}}</div>
            <p class="caption">Height: {{detail.height}}</p>
          <div><p class="text-2">hari color: {{detail.hair_color}} </p>
          <p><span>birthYear: {{detail.birth_year}}</span></p>
         </div>
         <div><p>{{detail.name}} has {{detail.films.length}} films</p>
         <p>created at : {{detail.created}}</p>
         <p>edit at : {{detail.edited}}</p>
         </div>
        </v-card>
    </v-container>
</template>
<script>
export default {
  props: ['detail'],
  data () {
    return {
    }
  }
}
</script>

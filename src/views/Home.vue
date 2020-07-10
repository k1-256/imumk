<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-row>
          <v-col cols="12" sm="4">
            <v-select outlined label="Предмет" :items="subjects" v-model="subject" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-select outlined label="Тип" :items="types" v-model="type" />
          </v-col>
          <v-col cols="12" sm="4">
            <v-select outlined label="Класс" :items="grades" v-model="grade" />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="6"
        sm="4"
        md="3"
        v-bind:key="item.courseId"
        v-for="item in items(subject, type, grade)"
      >
        <item :bonus="useBonuses()" :item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Item from '@/components/Item.vue';

export default {
  name: 'Home',
  components: { Item },
  async mounted() {
    await this.$store.dispatch('fetchItems');
    const [subject] = this.subjects;
    this.subject = subject;
    const [type] = this.types;
    this.type = type;
    const [grade] = this.grades;
    this.grade = grade;
  },
  data: () => ({
    subject: '',
    type: '',
    grade: '',
  }),
  computed: {
    ...mapState(['subjects', 'types', 'grades']),
    ...mapGetters(['items']),
  },
  inject: ['useBonuses'],
};
</script>

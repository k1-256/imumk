<template>
  <v-card>
    <v-img :src="`https://www.imumk.ru/svc/coursecover/${item.courseId}`" />
    <v-card-title>
      {{ item.subject }}
      <br>
      {{ grade(item.grade) }} класс
    </v-card-title>
    <v-card-subtitle>{{ item.genre }}</v-card-subtitle>
    <v-card-actions class="pa-0">
      <v-btn class="text-h6" block depressed color="primary">
        <span v-text="bonus ? item.priceBonus : item.price"/>
        <v-icon
          class="ml-1"
          v-text="bonus ?
            'mdi-checkbox-multiple-blank-circle-outline' :
            'mdi-currency-rub'"
        />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      required: true,
    },
    bonus: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    grade: () => (grade) => {
      const grades = grade.split(';');
      if (grades.length === 1) return grade;
      return `${grades[0]}-${grades[grades.length - 1]}`;
    },
  },
};
</script>

<style lang="stylus" scoped>
.v-card__title
  font-size 1.1rem
  line-height 1.5rem
  @media (min-width 376px)
    word-break normal
</style>

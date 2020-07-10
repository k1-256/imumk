import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    subjects: [],
    types: [],
    grades: [],
  },
  mutations: {
    setItems(state, items) {
      state.subjects = ['Все предметы', ...[...new Set(items.map((item) => item.subject))].sort()];
      state.types = ['Все типы', ...[...new Set(items.map((item) => item.genre))].sort()];
      state.grades = ['Все классы', ...[...new Set(
        [].concat.apply([], items.map((item) => item.grade.split(';'))),
      )].sort((a, b) => a - b)];
      console.log([state.subjects, state.types, state.grades]);
      state.items = items;
    },
  },
  actions: {
    async fetchItems(ctx) {
      const response = await axios.post('http://krapipl.imumk.ru:8082/api/mobilev1/update');
      const data = response.data.items;
      ctx.commit('setItems', data);
    },
  },
  getters: {
    items: (state) => (subject, type, grade) => {
      let { items } = state;
      items = state.subjects.indexOf(subject) <= 0
        ? items
        : items.filter((item) => item.subject === subject);
      items = state.types.indexOf(type) <= 0
        ? items
        : items.filter((item) => item.genre === type);
      items = state.grades.indexOf(grade) <= 0
        ? items
        : items.filter((item) => item.grade.split(';').indexOf(grade) !== -1);
      return items;
    },
  },
  modules: {
  },
});

<template>
  <v-app>
    <v-navigation-drawer
      app
      fixed
      temporary
      v-model="drawer"
    >
      <v-list>
        <v-list-item link>
          <v-list-item-title>Ссылочка</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>Ссылочка</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>Ссылочка</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="pl-0">
        <v-img src="https://www.imumk.ru/Content/skins/bubble/images/logo.svg" />
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon @click="useBonuses = !useBonuses">
        <v-icon
          v-text="useBonuses ? 'mdi-checkbox-multiple-blank-circle-outline' : 'mdi-currency-rub'"
        />
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    useBonuses: false,
  }),
  provide() {
    return {
      useBonuses: () => this.useBonuses,
    };
  },
};
</script>

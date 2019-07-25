<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Ultimaker </span>
        <span class="font-weight-light">material picker</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <MaterialPicker />
    </v-content>
  </v-app>
</template>

<script>
import MaterialPicker from './components/MaterialPicker';

export default {
  name: 'App',
  components: {
    MaterialPicker,
  },
  data: () => ({
    //
  }),
};
</script>

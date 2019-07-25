<template>
  <v-container>
    <v-layout xs12
              justify-center>
      <h2 class="display-1">{{ title }}</h2>
    </v-layout>
    <v-layout xs12>
      <v-flex xs12
              sm4
              offset-sm2>
        <v-layout wrap>
          <template v-for="color in colorList">
            <StyledRadioButton v-bind:key="color.id"
                               :active="selected === color.id"
                               :background="color.colorCode"
                               :id="color.id"
                               :name="name"
                               @activeRadioChanged="changeActive" />
          </template>
        </v-layout>
      </v-flex>
      <v-flex xs12
              sm6>
        <v-img :src="selectedObject.image"
               :alt="selectedObject.color" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import StyledRadioButton from "./StyledRadioButton"

export default {
  /* the data is, of course, mocked - this is not how the data would be entered in an application */
  data: () => ({
    colorList: [
      {
        id: 0,
        color: "Blue PLA",
        colorCode: "#00387b",
        image: "https://images.ctfassets.net/7cnpidfipnrw/2lgCmXNAWDu8gVTAfOt8Al/e45f77e11ca9cd60700d0d54b5e4ee17/5-color-PLA-Blue.png?w=1324"
      },
      {
        id: 1,
        color: "Magenta PLA",
        colorCode: "#da4594",
        image: "https://images.ctfassets.net/7cnpidfipnrw/25qfsB7DTB44LgYt0Ycdb4/2a9e74b362e13df6e4bba2113c3cf1eb/5-color-PLA-Magenta.png?w=1324"
      },
      {
        id: 2,
        color: "Red PLA",
        colorCode: "#bb1e10",
        image: "https://images.ctfassets.net/7cnpidfipnrw/1AoTHXbznub6EIlceBK9lR/0d7bea2705565ebca94c99639aae1dfe/5-color-PLA-Red.png?w=1324"
      },
      {
        id: 3,
        color: "Orange PLA",
        colorCode: "#ed6b21",
        image: "https://images.ctfassets.net/7cnpidfipnrw/5pBWX8vkRhCvYd1aJPV8JM/50302cc529830446de24e408c2a06717/5-color-PLA-Orange.png?w=1324"
      },
      {
        id: 4,
        color: "Yellow PLA",
        colorCode: "#f9bc00",
        image: "https://images.ctfassets.net/7cnpidfipnrw/7m2HapzVFdIxNxJ4cCBJzg/1ccb127ac4aac3877a446d273e6170ed/5-color-PLA-Yellow.png?w=1324"
      },
      {
        id: 5,
        color: "Green PLA",
        colorCode: "#61993b",
        image: "https://images.ctfassets.net/7cnpidfipnrw/35iyCH0Jw0kZCf4IjTGiFp/0c7f5c21dfa7e7fe03735e4652d25b99/5-color-PLA-Green.png?w=1324"
      },
      {
        id: 6,
        color: "Pearl white PLA",
        colorCode: "#e3d9c6",
        image: "https://images.ctfassets.net/7cnpidfipnrw/2ug9hqIavA5j9iBscP9s9J/5c73fae0ade17823cde99a2dc4da3e7f/5-color-PLA-Pearl-White.png?w=1324"
      },
      {
        id: 7,
        color: "White PLA",
        colorCode: "#f1ece1",
        image: "https://images.ctfassets.net/7cnpidfipnrw/6mZrFa0Yfcp6ZHvGhWJrex/f9840062dceab0b68ff30e6b0066696e/5-color-PLA-White.png?w=1324"
      },
      {
        id: 8,
        color: "Silver Metallic PLA",
        colorCode: "#a1a1a0",
        image: "https://images.ctfassets.net/7cnpidfipnrw/3sxQi2hlScyusYzVkRMudb/e801802494ed39401afbfa1ab2d9aaf3/5-color-PLA-Silver-Metallic.png?w=1324"
      },
      {
        id: 9,
        color: "Silver Metallic PLA",
        colorCode: "repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.07) 5px, transparent 5px, transparent 10px)",
        image: "https://images.ctfassets.net/7cnpidfipnrw/3sxQi2hlScyusYzVkRMudb/e801802494ed39401afbfa1ab2d9aaf3/5-color-PLA-Silver-Metallic.png?w=1324"
      },
    ],
    name: "material-color-picker",
    selected: 0,
    title: "Ultimaker PLA color availability",
    selectedObject: {}
  }),
  components: {
    StyledRadioButton
  },
  methods: {
    changeActive(value) {
      this.selected = value;
    },
    changeSelectedObject(id) {
      this.selectedObject = this.colorList.find((color) => color.id === id)
    }
  },
  watch: {
    selected(id) {
      this.changeSelectedObject(id)
    }
  },
  mounted() {
    this.changeSelectedObject(this.selected)
  }
}
</script>

<style>
</style>

<template>
  <label :for="radioId"
         class="styled-radio-button__label"
         :class="active && 'styled-radio-button__label--active'"
         :style="'background: ' + backgroundColor"
         @click="changeActive">
    <input type="radio"
           :id="radioId"
           :name="radioName"
           :value="radioId"
           :checked="isActive"
           class="d-none" />
  </label>
</template>

<script>
export default {
    data() {
        return {
            isActive: this.active,
            backgroundColor: this.background,
            radioId: this.id,
            radioName: this.name,
        }
    },
    props: {
        active: Boolean,
        background: String,
        id: Number,
        name: String,
    },
    methods: {
        changeActive() {
            this.$emit('activeRadioChanged', this.radioId)
        }
    }
}
</script>

<style lang="less" scoped>
  .styled-radio-button {
    &__label {
      height: 48px;
      width: 48px;
      margin: 5px;
      box-shadow: 0px 0px 0px 0px transparent;
      transition: all 0.2s ease-in-out;
      &--active {
        border: 2px solid #333;
        box-shadow: 0px 4px 8px 0px rgba(102, 102, 102, 0.65);
      }
    }
  }
</style>

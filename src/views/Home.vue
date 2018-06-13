<template>
    <ui-layout container>
        <ui-layout class="col-xs-6 col-md-3"></ui-layout>
        <ui-layout class="col-xs-6 col-md-3"></ui-layout>
    </ui-layout>
</template>


<script>
import UiLayout from '@/components/UiLayout.vue'

export default {
  components: {
  UiLayout
}
};
</script>

<style lang="scss">
@import '~@/assets/scss/_variables';
@import '~@/assets/scss/_mixins';

</style>
<template>
  <div
    class="ui-layout"
    :class="{
      'container': container,
      'container-left': containerLeft,
      'container-right': containerRight,
      'wrap': wrap,
      'align-start': alignStart,
      'align-center': alignCenter,
      'align-end': alignEnd,
      'justify-start': justifyStart,
      'justify-center': justifyCenter,
      'justify-end': justifyEnd,
      'justify-space-between': justifySpaceBetween,
      'flex-direction-column': column,
      'no-padding': noPadding
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiLayout',
  props: {
    container: Boolean,
    containerLeft: Boolean,
    containerRight: Boolean,
    wrap: Boolean,
    alignStart: Boolean,
    alignCenter: Boolean,
    alignEnd: Boolean,
    justifyStart: Boolean,
    justifyCenter: Boolean,
    justifyEnd: Boolean,
    justifySpaceBetween: Boolean,
    column: Boolean,
    noPadding: Boolean
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/_variables';
@import '~@/assets/scss/_mixins';

$sizes: (
  md: 760,
  lg: 1170
);

.ui-layout {
  max-width: 100%;
  display:   flex;

  &:not([class*="col-"]) {
    max-width:  100%;
    flex-basis: 100%;
  }

  &[class*="col-"]:not(.no-padding) {
    padding-right: #{$gutter}px;
    padding-left:  #{$gutter}px;
  }

  &.container:not([class*="col-"]) {
    max-width: 100%;
    @include media(md) {
      max-width:    760px;
      margin-left:  auto;
      margin-right: auto;
    }
    @include media(lg) {
      max-width: 1170px;
      width:     1170px;
    }
  }

  &.wrap {
    flex-wrap: wrap;
  }

  &.align-start {
    align-items: flex-start;
  }

  &.align-center {
    align-items: center;
  }

  &.align-end {
    align-items: flex-end;
  }

  &.justify-start {
    justify-content: flex-start;
  }

  &.justify-center {
    justify-content: center;
  }

  &.justify-end {
    justify-content: flex-end;
  }

  &.justify-space-between {
    justify-content: space-between;
  }

  &.flex-direction-column {
    flex-direction: column;

    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      &.ie {
        flex-direction: row;
      }
    }
  }

  @each $breakpoint, $size in $breakpoints {
    @for $i from 1 through $columns {
      &.col-#{$breakpoint}-#{$i} {
        @if $size {
          @media screen and (min-width: #{$size}px) {
            max-width:  ((100% / $columns) * $i);
            flex-basis: ((100% / $columns) * $i);
          }
        } @else {
          max-width:  ((100% / $columns) * $i);
          flex-basis: ((100% / $columns) * $i);
        }
      }
      &.col-#{$breakpoint}-offset-#{$i} {
        @if $size {
          @media screen and (min-width: #{$size}px) {
            margin-left: ((100% / $columns) * $i);
          }
        } @else {
          margin-left: ((100% / $columns) * $i);
        }
      }
    }
  }
}
</style>
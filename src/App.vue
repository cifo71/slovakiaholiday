<template>
  <div id="app">
    <header class="header">
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/img/logo.png" />
      </router-link>
      <nav>
        <router-link :to="{ name: 'home' }">Home</router-link> 
        <router-link :to="{ name: 'about' }">About us</router-link> 
        <router-link :to="{ name: 'services' }">Services</router-link> 
        <router-link :to="{ name: 'slovakia' }">Slovakia</router-link>
        <router-link :to="{ name: 'wellnes' }">Wellnes</router-link> 
        <router-link :to="{ name: 'alcoroads' }">Alcoroads</router-link>
        <router-link :to="{ name: 'contactform' }">Contact</router-link>
      </nav>
    </header>

    <section>
      <router-view/>
    </section>

    <footer class="footer">
      <p>Copyright &copy; 2018 www.slovakiaholiday.org</p>
    </footer>
  </div>
</template>

<style lang="scss">
@import "~@/assets/scss/reset";
@import "~@/assets/scss/variables";
@import "~@/assets/scss/mixins";

.header {
  width:           100%;
  height:          80px;
  background:      #2C3E50;
  padding:         0 40px;
  display:         flex;
  align-items:     center;
  justify-content: space-between;
  position:        fixed;
  top:             0;
  left:            0;

  img {
    max-width: 100px;
  }

  nav {
    display: none;
    @include media(md) {
      display: flex;
    }

    a {
      padding:   12px;
      color:     $accent;
      font-size: 18px;
      display:   block;

      &:not(:last-of-type) {
        margin-right: 60px;
      }
      
      &:hover {
        color: $primary;
      }
    }
  }
}

.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #2C3E50;
    color: white;
    text-align: center;
}
</style>

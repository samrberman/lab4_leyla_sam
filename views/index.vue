<template>
  <div class="container">
    <h1>Harvard Art Museum: Gallery Listing</h1>

    <!-- Search bar to filter galleries -->
    <div class="container">
      <input placeholder="Search Items" type="text" v-cloak v-model="search">
    </div>

    <!-- List galleries & info -->
    <ul>
      <li v-for="gallery in filteredGalleries">
        <a :href="'/gallery/' + gallery.id">Gallery #{{ gallery.id }}: {{ gallery.name }} (Floor {{ gallery.floor }})</a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              galleries: [],
              search: ""
            };
        },
        // Filter displayed galleries to match search bar input
        computed:{
            filteredGalleries: function(){
                return this.galleries.filter((gallery) => {
                    return gallery.name.toLowerCase().match(this.search.toLowerCase());
                });
          }
        }};
</script>

<style>
  body {
    background-color: #fcf4e8
  }
  ul {
    list-style: none;
  }
  div {
      padding-top: 50px;
      padding-right: 30px;
      padding-bottom: 50px;
      padding-left: 80px;

      color: #2a6592;
      text-align: center;
  }
  a {
      color: #7e9a9a;
  }
  a:hover {
      color: #db9833;
  }
  input {
    color: #2a6592;
    background-color: #d4dddd;
  }
  ::placeholder {
    color: #2a6592;
  }
</style>

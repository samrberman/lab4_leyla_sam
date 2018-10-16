<template>
  <div>
    <h1>Objects in Gallery</h1>

    <!-- <%# initialize table and label columns %> -->
    <table class="table-hover" border="1">
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>People</th>
        <th>URL</th>
      </tr>

      <!-- List information for each object -->
      <template v-for="object in objects">
      <tr>
        <td>
          <a :href="'/object/' + object.id"> {{ object.title }} </a>
        </td>
        <td>
          <img :src="object.primaryimageurl" width="150px">
        </td>
        <td>
          <div v-if="object.people">
            <li v-for="person in object.people">
              {{ person.name }}
            </li>
          </div>
          <div v-else>
            <li> N/A </li>
          </div>
        </td>
        <td>
          <a :href="object.url"> {{ object.url }}</a>
        </td>
      </tr>
      </template>
    </table>
  </div>
</template>

<script>
export default {
    data() {
      return {};
    }
}
</script>

<style>
body {
  background-color: #fcf4e8
}
table {
  align: center;
  border-collapse: collapse;
  width: 100%;
}
div {
  text-align: center;
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 30px;
  color: #2a6592
}
td {
  border: 1px solid #2a6592;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #ecf2f9;
}
tr:nth-child(odd) {
  background-color: #d8e5f3;
}
th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #2a6592;
  color: white;
}
li {
  list-style: none;
  text-align: center;
}
a {
  color: #2a6592;
}
a:hover {
  color: #db9833
}
</style>

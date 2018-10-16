<template>
  <div>

    <!-- Render object information -->
    <h1>Object Information</h1>
        <div class="container" style="padding-top:25px">
          <img :src="object.primaryimageurl" width="500px">
        </div>
        <ul>
          <li>
            Title: <i> {{ object.title }} </i>
          </li>
          <li>
            Description: {{ object.description }}
          </li>
          <li>
            Provenance: {{ object.provenance }}
          </li>
          <li>
            Accession year: {{ object.accessionyear }}
          </li>
        </ul>

    <!-- comment submission form -->
    <form class="form-group" action="/" method="post">
      <div class="container">
        <textarea class="form-control-lg" name="comments" id="comments" placeholder="Add a comment" style="font-family:sans-serif;font-size:1.2em;"></textarea>
        <br>
        <input id="submit_button" type="submit" value="Submit">
      </div>
    </form>

    <!-- display previously submitted comments -->
    <div class="container">
      <h2 class="comment-list"> Comments </h2>
      <ul class="comment-box">
        <li class="comment-list" v-for="comment in objectcomments">
          &#9659 {{ comment.comment }}
        </li>
      </ul>
    </div>
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
   background-color: #fcf4e8;
   text-align: center;
   img-align: center;
   color: #225277;
  }
  div {
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 50px;
    padding-left: 30px;
    color: #2a6592
  }
  input {
    backround-color: #7e9a9a;
  }
  li {
    list-style: none;
    text-align: center;
  }
  li.comment-list {
    text-align: left;
  }
  .comment-box {
    border-color: #7f7f7f;
    border-style: solid;
  }
  textarea {
    color: #2a6592;
    background-color: #d4dddd;
    text-align: center;
  }
  placeholder {
    color: lightgrey;
  }
  #comments {
    color: #2a6592;
    background-color: #d4dddd;
    text-align: center;
  }
  #submit_button {
    color: #2a6592;
    background-color: #d4dddd;
  }
</style>

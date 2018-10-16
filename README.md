# lab4

This web application allows a user to examine galleries and objects in the Harvard
Art Museum. The application first shows a list of galleries that the user can
click on. In addition, a search box allows users to filter the gallery list by
name. Then, users can view basic information about all of the objects in a given
gallery. Finally, users can see an image and detailed information about a
specific object. In addition, users can leave comments.

The application is contained in the following files:
app.js contains the main program
The directory css includes the following:
  styles.css contains css style requirements for the application
The directory views includes the following:
  index.vue is the entry point to the application and inclues a list of all
    galleries, as well as a search box for filtering by gallery name
  gallery.vue displays a table containing all the objects in a given gallery
  object.vue displays an image and detailed information on a specific object and
    includes a comments list and a place for users to leave new comments

This application relies heavily on both css and Bootstrap classes for styling.
User comments persist only until the server is restarted.

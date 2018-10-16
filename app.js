const express = require('express');
const expressVue = require('express-vue');
const path = require('path');
const bodyParser = require('body-parser');
require('cross-fetch/polyfill');

const hostname = '127.0.0.1';
const port = 3000;

// Initialize Express
const app = express();
app.use(express.static('static'));

// Options for express-vue
const vueOptions = {
  head: {
    title: 'Harvard Art Museums',
    metas: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    ],
    styles: [
      {
        style: '/css/styles.css'
      },
      {
        style: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
      }
    ]
  },
  rootPath: path.join(__dirname, '/views')
};

// Initialize express-vue
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);

const API_KEY = "6435f460-b77e-11e8-bf0e-e9322ccde4db";

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Initialize array in which to store comments for all artworks
let comments = [];

// Tetrieve only comments with the correct id for the selected object from the 'comments' array
function extractComments(comments, id) {
    let matchedComments = comments.filter(function(comment) {
        return comment.objectid == id;
    })
    return matchedComments;
};

// Render index view: gallery list
app.get('/', (req, res) => {
    const url = `https://api.harvardartmuseums.org/gallery?size=100&apikey=${API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let galleries = data.records;
            res.renderVue('index.vue', {galleries});
        });
});

// Render gallery view: objects in gallery
app.get('/gallery/:gallery_id', (req, res) => {
    fetch(`https://api.harvardartmuseums.org/object?size=100&apikey=${API_KEY}&gallery=${req.params.gallery_id}`)
        .then(response => response.json())
        .then(data => {
            let objects = data.records;
            res.renderVue('gallery.vue', {objects});
        });
});

// Render object information
app.get('/object/:object_id', (req, res) => {
    let objectcomments = extractComments(comments, req.params.object_id);
    fetch(`https://api.harvardartmuseums.org/object/${req.params.object_id}?size=100&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
          let object = data;
          res.renderVue('object.vue', {object, objectcomments});
        });
});

// Following form submission, add JSON object containing the comment and the current artwork's ID to 'comments' array
app.post('/', function(req, res) {
    let objectid = req.headers.referer.split('object/')[1];
    comments.push({"objectid" : objectid, "comment" : req.body.comments});
    res.redirect('back');
});

// Listen on socket
app.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}/`);
});

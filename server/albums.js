const express = require ('express');
const ctrl = require ('./controller');

const app = express ()

app.use (express.json ( ))

app.get ('/api/favorites', ctrl.listAlbums);
app.get ('/api/favorite/:id', ctrl.getAlbum);
app.post ('/api/favorites', ctrl.addAlbum);
app.put ('/api/favorite/:id', ctrl.changeAlbum);
app.delete ('/api/favorite/:id', ctrl.deleteAlbum);

app.listen (4752, () => console.log ('Server running on 4752'))
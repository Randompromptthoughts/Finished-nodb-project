let albums = [
  {id: 1, name: 'Take Off Your Pants And Jacket (blink-182)'},
  {id: 2, name: 'Hozier (Hozier)'},
  {id: 3, name: 'The Greatest Generation (The Wonder Years)'}, 
  {id: 4, name: 'The Heist (Macklemore & Ryan Lewis)'},
  {id: 5, name: 'Nevermind (Nirvana)'},
  {id: 6, name: 'Futures (Jimmy Eat World)'},
  {id: 7, name: 'The Dark Side of the Moon (Pink Floyd)'},
  {id: 8, name: 'A Night At The Opera (Queen)'},
  {id: 9, name: 'The Black Parade (My Chemical Romance)'},
  {id: 10, name: 'Born This Way (Lady Gaga)'}
];

const MaxNumAlbums = 10

function lastInsertedId() {
  return albums[albums.length-1].id
}

module.exports = {
    listAlbums: (req, res) => {
      res.status(200).send (albums);
    },
    getAlbum: (req, res) => {
      console.log(req.params)
      let album = albums.find(element => element.id === +req.params.id);
      res.status(200).send (album)
    },
    addAlbum: (req, res) => {
        console.log (req.body)

        // verify we aren't already at 10 albums
        if (albums.length == MaxNumAlbums) {
          res.status(507).send("max number of albums reached delete one to add")
          return
        }

        let oneAlbum = {
            id: lastInsertedId()+1,
            name: req.body.name
        }

        albums.push(oneAlbum);
        res.status(201).send(oneAlbum);
    },
    changeAlbum: (req, res) => {
        console.log(req.params)
        console.log(req.body)

        let albumIdx = albums.findIndex(element => element.id === +req.params.id);
        albums[albumIdx].name = req.body.name

        res.status(200).send(albums);
    },
    deleteAlbum: (req,res) => {
      console.log(req.params)

      let eraseAlbum = albums.findIndex(element => element.id === +req.params.id);
      albums.splice(eraseAlbum, 1)

      res.status(204).send();
    }
}
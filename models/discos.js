var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var discosSchema = new Schema({
    tituloDisco: String,
    canciones:
        [
            {
                tituloCancion: String,
                imagenes: [
                    {
                        url: String,
                        contenType: String
                    }
                ],
                videos: [
                    {
                        url: String
                    }
                ],
                listen: {
                    deezer: String,
                    grooveshark: String,
                    spotify: String,
                    youtube: String
                }
            }
        ]
});

module.exports = mongoose.model('discos', discosSchema);
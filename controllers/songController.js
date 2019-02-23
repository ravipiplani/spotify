import models from '../database/models';

class SongController {
    index(req, res) {
        models.song.findAll({
            limit: 50
        })
            .then(songs => res.status(200).send({
                success: 'true',
                message: 'Songs retrieved successfully',
                data: songs,
            }));
    }

    show(req, res) {
        const id = parseInt(req.params.id, 10);
        models.song.findByPk(id)
            .then((song) => {
                if (song) {
                    return res.status(200).send({
                        success: 'true',
                        message: 'Song retrieved successfully',
                        data: song
                    });
                }
            })
            .catch((e) => {
                return res.status(404).send({
                    success: 'false',
                    message: 'Song does not exist',
                });
            });
    }

    search(req, res) {
        models.song.findAll({
            where: {
                $or: {
                    name: {
                        $like: '%' + req.body.query + '%'
                    },
                    artist: {
                        $like: '%' + req.body.query + '%'
                    }
                }
            }
        })
            .then(songs => res.status(200).send({
                success: 'true',
                message: 'Songs retrieved successfully',
                data: songs,
            }));
    }
}

const songController = new SongController();
export default songController;
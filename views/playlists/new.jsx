const React = require('react')
const Def = require('../default')

function new_playlist(data){
    let message= ''
    if (data.message)
    message = (
        <h4 className='alert-danger'>
            {data.message}
        </h4>
    )
    return (
        <Def>
            <main>
                <h1>Create a New PLAYlist</h1>
                {message}
                <form method="POST" action="/playlists">
                    <div className="form-group">
                        <label htmlFor="name">Playlist Name</label>
                        <input className="form-control" id="name" name="name" required />
                        <label htmlFor="playlistItem">Add Game</label>
                        <input className="form-control" id="game" name="game" required />
                    </div>
                </form>
            </main>
        </Def>
    )
}

module.exports= new_playlist
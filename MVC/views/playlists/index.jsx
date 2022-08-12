const React = require('react')
const Def = require('../default')

function index(data) {
    let playlistsFormatted = data.playlists.map((playlist) => {
        return(
            <div className='col-sm-6'>
                <h2>
                    <a href={`/playlists/${playlist.id}`}>
                        {playlist.name}
                    </a>
                </h2>
                <p className='text-center'>
                    {playlist.games}
                </p>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <h1>Playlists</h1>
                <div className='row'>
                    {playlistsFormatted}
                </div>
            </main>
        </Def>
    )
}
module.exports= index
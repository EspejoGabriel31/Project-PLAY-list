const React = require("react");
const Def= require('../default')

function show({playlist, id}) {
    console.log(id)
    return(
        <Def>
            <main>
                <h1>{playlist.name}</h1>
                <div>
                    <p className="text-center">
                        {playlist.game}
                    </p>
                    <a href={`/playlists/${id}/edit`} className="btn btn-warning">
                        Edit
                    </a>
                    <form method='POST' action={`/places/${id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
                </div>
            </main>
        </Def>
    )
}

module.exports= show
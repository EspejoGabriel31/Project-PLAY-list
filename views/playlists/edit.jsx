const React = require('react')
const Def = require('../default.jsx')

function edit_playlist(data) {
    return(
        <Def>
            <main>
                <h1>Edit Form</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="playlist">Playlist Name</label>
                        <input className="form-control" id="playlist" name="playlist" value= {data.playlist.name}/>
                        </div>
                        {/* //cute pic here?
                        <div>
                        <label htmlFor="pic">Playlist Picture</label>
                        <input type="url" className="form-control" id="pic" name="pic" />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="games">Games</label>
                        <input className="form-control" name="game"/>
                    </div>
                </form>
            </main>
        </Def>
    )
    
}

module.exports = edit_playlist

export default function New(props) {
    return(
        <div>
            <main>
                <h1>Create a New PLAYlist</h1>
                <form method="POST" action="/playlists">
                    <div className="form-group">
                        <label htmlFor="name">Playlist Name</label>
                        <input className="form-control" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                        <label htmlFor="playlistItem">Add Game</label>
                        <input className="form-control" id="game" name="game" required />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Playlist" />
                </form>
            </main>
        </div>
    )
}


export default function Edit() {
    return(
        <main>
        <h1>Edit Playlist</h1>
        <form method="POST" action="">
            <div className="form-group">
                <label htmlFor="playlist">Playlist Name</label>
                <input className="form-control" id="playlist" name="playlist" value=""/>
                </div>
                {/* //cute pic here?
                <div>
                <label htmlFor="pic">Playlist Picture</label>
                <input type="url" className="form-control" id="pic" name="pic" />
            </div> */}
            <div className="form-group">
                <label htmlFor="games">Games</label>
                <input className="form-control" name="game" required/>
            </div>
            <input className="btn btn-primary" type="submit" value="Add Playlist" />
        </form>
    </main>
    )
}
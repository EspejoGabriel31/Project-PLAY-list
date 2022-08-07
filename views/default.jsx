const React = require('react')
import SearchBar from './home_components/components/SearchBar'

function Def (html) {
    return (
        <html>
            <head>
                <title>PLAY-list</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
                <link rel="stylesheet" href="/css/style.css" />
            </head>
            <body>
                <h1>PLAY-list</h1>
                <nav>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/playlists/new'>Create</a>
                        </li>
                        <li>
                            <a href='/aboutUs'>About Us</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
                <footer>
                    <SearchBar />
                </footer>
            </body>
        </html>
    )
}

module.exports = Def

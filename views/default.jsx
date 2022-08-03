const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Play-List</title>
                <link rel="stylesheet" href="../style.css" />
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
const react = require('react')
const Def = require('./default')

function err404pg(){
    return(
        <Def>
            <main>
                <h1>404 Page</h1>
             <p>Page Not Found</p>
            </main>
        </Def>
    )
}

module.exports = err404pg
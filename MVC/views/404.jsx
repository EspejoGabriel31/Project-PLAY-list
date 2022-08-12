const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
            <main>
                <h1>404 : PAGE NOT FOUND</h1>
                <p>
                        OOPSIE WOOPSIE!! Uwu We made a fucky wucky!! A wittle fucko boingo! The code monkeys at our headquarters are working VEWY HAWD to fix this!
                        Dangerous game here my dudes
                        {/* MAKE SURE TO DELETE THIS LATER */}
                    </p>
                <div>
                    <img src="https://i.ytimg.com/vi/ffT2Ml_C5dI/hqdefault.jpg" alt="oh nyo" />
                    
                </div>
            </main>
        </Def>
    )
}

module.exports = error404

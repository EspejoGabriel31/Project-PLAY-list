export default function GalleryItem(props){

    const ItemStyle = {
        'width' : '50%',
        'height' : '30vh',
        'border' : '1px solid black',
        'margin' : '2vh 25vw',
        'backgroundRepeat' : 'no-repeat',
        'backgroundSize' : 'cover',
        'color' : 'blue',
    }

    const displayGames = props.games.map((item,index) => {
        return(
            <div>
                <h1>
                    {item.name}
                </h1>
            </div>
        )
    })

        return(
            <div style={ItemStyle}>
                <div>
                    <h1>
                        {props.item.name}
                    </h1>
                    {displayGames}
                </div>
            </div>
        )
}
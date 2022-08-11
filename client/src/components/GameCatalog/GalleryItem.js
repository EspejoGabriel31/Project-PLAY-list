export default function GalleryItem(props){

    const ItemStyle = {
        'width' : '50%',
        'height' : '30vh',
        'border' : '1px solid black',
        'margin' : '2vh 25vw',
        'background-image': `url('${props.item.background_image}')`,
        'backgroundRepeat' : 'no-repeat',
        'backgroundSize' : 'cover',
        'color' : 'blue'
    }


        return(
            <div style={ItemStyle}>
                <div>
                    <h1>
                        <a href={`/games/${props.item.slug}`}>
                            {props.item.name}
                        </a>
                    </h1>
                </div>
            </div>
        )
}
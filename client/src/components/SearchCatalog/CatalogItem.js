export default function GalleryItem(props){

    console.log("CatalogItem: ", props)
    const ItemStyle = {
        'width' : '30vw',
        'height' : '30vh',
        'border' : '1px solid black',
        'margin' : '2vh 25vw',
        'backgroundRepeat' : 'no-repeat',
        'background-image': `url('${props.item.background_image}')`,
        'backgroundSize' : 'cover',
        'color' : 'black',
        'display' : 'inline-block'
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
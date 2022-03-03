import React from 'react'
import style from './index.scss'
var ReactCanvas = require('react-canvas');

var Surface = ReactCanvas.Surface;
var Image = ReactCanvas.Image;
var Text = ReactCanvas.Text;
var ListView = ReactCanvas.ListView;


const Goods = (item = {}) => {
    return (
        <Surface>
            <Image src={item.imgUrl} />
            <Text>{item.name}</Text>
        </Surface>
    )
}

export default Goods
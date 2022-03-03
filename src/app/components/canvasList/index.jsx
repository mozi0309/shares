import React from 'react'
import style from './index.scss'
// import Goods from './components/goods'

var ReactCanvas = require('react-canvas');

var Surface = ReactCanvas.Surface;
var Image = ReactCanvas.Image;
var Text = ReactCanvas.Text;
var ListView = ReactCanvas.ListView;

const arr = [
    {
        imgUtr: 'https://ifile.2dfire.com/imageServiceMigration/menu/1a50a7401473b990b6318adbe75ff982.jpg?x-oss-process=image/resize,m_mfit,limit_0,w_400,h_400/quality,Q_80/format,jpg',
        name: 'yaopian'
    },
    {
        imgUtr: 'https://ifile.2dfire.com/imageServiceMigration/menu/1a50a7401473b990b6318adbe75ff982.jpg?x-oss-process=image/resize,m_mfit,limit_0,w_400,h_400/quality,Q_80/format,jpg',
        name: 'yaopian'
    },
    {
        imgUtr: 'https://ifile.2dfire.com/imageServiceMigration/menu/1a50a7401473b990b6318adbe75ff982.jpg?x-oss-process=image/resize,m_mfit,limit_0,w_400,h_400/quality,Q_80/format,jpg',
        name: 'yaopian'
    }
]
const CanvasList = () => {
    return (
        <Surface>
            <Text>hahah</Text>
            {/* <ListView>
                {arr.map((i, index) => (
                    <Image src={i.imgUtr} />
                ))}
            </ListView> */}
        </Surface>
    )
}

export default CanvasList
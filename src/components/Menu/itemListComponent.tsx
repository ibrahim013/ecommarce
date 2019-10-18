import React from 'react';
import { Link } from 'react-router-dom';
import './itemListStyle.scss';


interface Props {
  image: string;
  key?: string;
  title: string;
  linkUrl: string;
}

const ItemListComponent: React.FC<Props> = ({title, image, linkUrl}) => (
    <div className="item-wrraper" >
      <div className="item-wrraper-background" style={{
        backgroundImage: `url(${image})`
      }}/>
      <Link to={linkUrl} className="item-wrraper-content">
        <h1>{title}</h1>
        <span>Shop Now</span>
      </Link>
    </div>
  )
export default ItemListComponent

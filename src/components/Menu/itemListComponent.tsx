import React from 'react';
import './itemListStyle.scss';


interface Props {
  image: string;
  key?: string;
  title: string;
}

 const ItemListComponent: React.FC<Props> = ({title, image}) => (
    <div className="item-wrraper" >
      <div className="item-wrraper-background" style={{
        backgroundImage: `url(${image})`
      }}/>
      <div className="item-wrraper-content">
        <h1>{title}</h1>
        <span>Shop Now</span>
      </div>
    </div>
  )
export default ItemListComponent

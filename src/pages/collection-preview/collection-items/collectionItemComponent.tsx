import React from 'react';
import { connect } from 'react-redux';
import './collectionItemsStyle.scss';
import CustomBotton from '../../../components/custom-button/customButtonComponent';
import { addItem } from '../../../redux/cart/cartAction';


const CollectionItem: React.FC<any> = ({item, addItem}) => {
  const {name, imageUrl, price} = item;
  return (
    <div className='collection-item'>
      <div className='collection-item-image' style={{backgroundImage: `url(${imageUrl})`}}
      />
      <div className='collection-item-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{`₦ ${price}`}</span>
      </div>
      <CustomBotton onClick={()=> { addItem(item) }}inverted className='custom'>Add to Cart</CustomBotton>
    </div>
  )
}
const mapDispatchToProps = (dispatch: any) => ({
  addItem: (item: any)  => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);
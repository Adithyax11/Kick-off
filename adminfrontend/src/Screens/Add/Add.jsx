import React from 'react'
import { assets } from '../../assets/assets'
import './Add.css'

const Add = () => {
  return (
    <div className='screen'>
        <form className='flex-col'>
            <div className="add-image-upload flex-col">
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={assets.upload_area} alt=""/>
                </label>
                <input type="file" id="image" hidden required/>
            </div>
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input type="text" name="name" placeholder='Type here'/>
            </div>
            <div className="add-product-description flex-col">
                <p>Product Description</p>
                <textarea name="description" rows="6" placeholder='Write content here' required></textarea>
            </div>
            <div className="add-category-price">
                <div className="add-category-price flex-col">
                    <p>Product Category</p>
                    <select name="category" id="">
                        <option value="Jersey">Jersey</option>
                        <option value="Studs">Studs</option>
                        <option value="Shoes">Shoes</option>
                        <option value="Keeping Gloves">Keeping Gloves</option>
                        <option value="Footballs">Footballs</option>
                        <option value="Socks">Socks</option>
                        <option value="Shin Guards">Shin Guards</option>
                        <option value="Kit Bags">Kit Bags</option>
                    </select>
                </div>
                <div className="add-price flex-col">
                    <p>Product Price</p>
                    <input type="Number" name='price' placeholder='150' required/>
                </div>
            </div>
            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add
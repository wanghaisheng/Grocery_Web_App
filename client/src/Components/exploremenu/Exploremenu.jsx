import React, { useState,useEffect } from 'react'
import { assets, food_list } from '../../assests/assets'
import './exploremenu.css'



const Exploremenu = ({ foodlist,itemCount,setItemCount,category}) => {

    

    const [similarCategory, setsimilarCategory] = useState()


    const RestaurantNames = [{
        name: "Cheesecake Factory",
        address: "123 Main Street, Cityville, US"
    },
    {
        name: "Olive Garden",
        address: "456 Elm Street, Townsville, US"
    },
    {
        name: "PF Chang's",
        address: "789 Oak Avenue, Villageton, UK"
    },
    {
        name: "Hard Rock Cafe",
        address: "101 Rock Boulevard, Rockville, US"
    },
    {
        name: "Rainforest Cafe",
        address: "555 Jungle Way, Foresttown, US"
    },
    {
        name: "Applebee's",
        address: "777 Maple Drive, Appleville, US"
    },
    {
        name: "Buffalo Wild Wings",
        address: "888 Wing Street, Wingtown, US"
    },
    {
        name: "Chili's Grill & Bar",
        address: "999 Pepper Avenue, Chilitown, US"
    },
    {
        name: "Red Robin",
        address: "321 Robin Road, Robinville, US"
    }]


    const [showDetails, setShowdetails] = useState(false)

    const [desID, setDesID] = useState()

    const handleAdd = (itemId) => {
        setItemCount(prevCounts => ({
            ...prevCounts,
            [itemId]: (prevCounts[itemId] || 0) + 1
            
        }));
        
    };

    // const handleRemove = (itemId) => {
    //     setItemCount(prevCounts => ({
    //         ...prevCounts,
            
    //         itemId: Math.max(0, (prevCounts[itemId] || 0) - 1) ,
    //         Object.entries(prevCounts) == 0 ? delete obj(itemId) : itemId
    //     }));

        
    //     console.log(itemCount)
    
    // };

    const handleRemove = (itemId) => {
        setItemCount(prevCounts => {
            // Copy the previous state
            let updatedCounts = { ...prevCounts };
    
            // Update the count for the specified item
            updatedCounts[itemId] = Math.max(0, (prevCounts[itemId] || 0) - 1);
    
            // Check if the count for the item is zero, then delete the property
            if (updatedCounts[itemId] === 0) {
                delete updatedCounts[itemId];
            }
    
            return updatedCounts;
        });
    
        console.log(itemCount);
    };


    const handleshow = (id) => {
        setShowdetails(true)
        setDesID(id)
        setsimilarCategory(food_list[id].category)
        // console.log(foodlist[id].category)
        // console.log(id)
        // console.log(similarCategory)
    }

    


    return (
        <div className='food-list-container'>
            <h1>Grab It Before It's Gone!</h1>
            <div className='food-items'>


                {
                    foodlist.map((item, index) =>
                        <div key={item._id} className='food-item' >
                            <div className="food-item-img-container">
                                <img src={item.image} alt="" className='food-item-img' onClick={() => handleshow(item._id - 1)} />
                                {itemCount[item._id] > 0 ?

                                    <div className="add-remove-icon">
                                        <img src={assets.remove_icon_red} alt="" className='remove-icon-red' onClick={() => handleRemove(item._id)} />
                                        <p>{itemCount[item._id] || 0}</p>
                                        <img src={assets.add_icon_green} alt="" className='add-icon-green' onClick={() => handleAdd(item._id)} />
                                    </div> : <img src={assets.add_icon_white} alt="" className='add-icon-white' onClick={() => handleAdd(item._id )} />
                                }


                            </div>
                            <div className="food-item-info" onClick={() => handleshow(item._id - 1)}>
                                <div className="food-item-name-ratings">


                                    <h4>{item.name}</h4>
                                    <img src={assets.rating_starts} alt="" className='star-rating' />
                                </div>
                                <p className='food-item-des'>{item.description}</p>
                                <p className='food-item-price'>{"₹ " + item.price}</p>
                            </div>
                        </div>



                    )
                }

            </div>


            {showDetails &&
                <div className='description'>
                    <div className="des-container">
                        <div className='des-info-container'>
                            <div className='des-img-container'>
                                <img src={food_list[desID].image} alt="" />
                            </div>
                            <div className='des-info'>
                                <h1>{RestaurantNames[(Math.floor(Math.random() * 9))].name}</h1>
                                <h6>{RestaurantNames[(Math.floor(Math.random() * 9))].address}</h6>
                                <h2 className='food-title'>{food_list[desID].name}</h2>
                                <p>Lorem iplosum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nesciunt ipsam facere fuga eos provident voluptatum repellat, lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptate laudantium, ullam vero minus perferendis adipisci. Ipsam nisi voluptate quasi?saepe possimus, nobis repellendus neque in numquam hic. Eligendi quo doloremque impedit eveniet?consectetur adipisicing elit. Nisi quia, cupiditate quam voluptatum laborum labore voluptas magni culpa iure unde corrupti soluta blanditiis sed esse eligendi accusamus autem officiis excepturi!50</p>
                                <button className='Order-btn'>Order Now</button>
                            </div>
                            <img src={assets.cross_icon} alt="" onClick={() => setShowdetails(false)} className='cross-icon' />

                        </div>

                        <div className="similar-products">

                            {

                                foodlist.filter((item) => item.category == similarCategory && item != food_list[desID]).map((item,index) =>


                                    <div key={item._id} className='similar-food-item' onClick={() => handleshow(item._id - 1)}>
                                    
                                        <div className="similar-food-item-img-container">
                                            <img src={item.image} alt="" className='similar-food-item-img' />

                                        </div>
                                        <div className="similar-food-item-info">
                                            <div className="similar-food-item-name-ratings">
                                                <h4>{item.name}</h4>
                                                <img src={assets.rating_starts} alt="" className='similar-star-rating' />
                                            </div>
                                            <p className='similar-food-item-price'>{"₹ " + item.price}</p>
                                        </div>
                                    </div>


                                )

                            }
                        </div>
                    </div>

                </div>


            }
        </div>
    )
}

export default Exploremenu


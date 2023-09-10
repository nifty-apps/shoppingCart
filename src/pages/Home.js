import React, { useState } from 'react';
import productsData from '../data/productsData';
import ProductsCard from '../components/ProductsCard';

const Home = () => {
    const [sortBy, setSortBy] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSortChange = (sortOption) => {

        setSortBy(sortOption);
        
    };
    

    // Apply sorting based on selected option
    let sortedProducts = [...productsData];
    if (sortBy === 'priceLowToHigh') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHighToLow') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }else if(sortBy === 'nameZToA'){
       sortedProducts.sort((a,b)=>a.title.localeCompare(b.title))
    }
    else if(sortBy === 'nameAToZ'){
       sortedProducts.sort((a,b)=>b.title.localeCompare(a.title))
    }

    return (
        <>

            <section id="home">
                <div className="container">
                    <div className="dropdown">
                        <button className="btn btn-secondary" onClick={() => setShowDropdown(!showDropdown)}>
                            Sort By <span><img src="/images/down-arrow-5-svgrepo-com.svg" alt="" /></span>
                        </button>
                        {showDropdown && (
                            <div className="dropdown-menu">
                                <button className="dropdown-item" onClick={() => handleSortChange('priceLowToHigh ')}>Price high to low</button>
                                <button className="dropdown-item" onClick={() => handleSortChange('priceLowToHigh')}>Price low to High</button>
                                <button className="dropdown-item" onClick={() => handleSortChange('nameZToA')}>Title Z to A</button>
                                <button className="dropdown-item" onClick={() => handleSortChange('nameAToZ')}>Title A to Z</button>
                            </div>
                        )}
                    </div>
                    <div className="home_content">
                        {
                            sortedProducts.map((item) => (
                                <ProductsCard key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
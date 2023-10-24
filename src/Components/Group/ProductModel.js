import { useEffect, useState } from "react";
import Services from '../../services/ProductServices';
import Image from 'next/image';

function CreateGroup({handelClose, handelAdd}) {
    const [productList, setProductList] = useState([]);
    const [productCount, setProductCount] = useState(0);
    const [selectedValues, setSelectedValues] = useState([]);
    const [buttonActive, setButtonActive] = useState('easy-btn add-poup');

    const ProductServices = new Services();
    
    //Get Product Array
    useEffect(() => {
        const productListData = async () =>{
            try {
                let result = await ProductServices.productListAll();
                setProductList(result.data.product);
            } catch (error) {
                console.log(error);
            }
        }
        productListData();

        let totalProduct = JSON.parse(localStorage.getItem("product"));
        if (Array.isArray(totalProduct)) {
            var result = totalProduct.map(function (x) { 
                return parseInt(x, 10); 
            });
            setSelectedValues(result);
            setProductCount(totalProduct.length);
            if(totalProduct.length > 0){
                setButtonActive('easy-btn add-poup add-poup-event');
            }
        } 
    }, []);

    const closePopup = () => {
        handelClose(false);
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedValues((prevSelectedValues) => [
            ...prevSelectedValues,
            parseInt(value),
        ]);
        } else {
            setSelectedValues((prevSelectedValues) =>
                prevSelectedValues.filter((id) => id !== parseInt(value))
            );
        }

        let product = localStorage.getItem("product");
        if(product == null){
            let productArray = [event.target.value];
            localStorage.setItem("product", JSON.stringify(productArray));
        } else {
            let productArray = JSON.parse(product);
            if (productArray.includes(event.target.value)) {
                console.log('hai');
                let latestArray = productArray.filter(item => item !== event.target.value);
                if(latestArray.length == 0){
                    localStorage.removeItem("product");
                } else {
                    localStorage.setItem("product", JSON.stringify(latestArray));
                }                
            } else {
                productArray.push(event.target.value);
                localStorage.setItem("product", JSON.stringify(productArray));
            }
        }
        let totalProduct = JSON.parse(localStorage.getItem("product"));
        if(totalProduct != null){
            setProductCount(totalProduct.length);
            if(totalProduct.length > 0){
                setButtonActive('easy-btn add-poup add-poup-event');
            }
        } else {
            setProductCount(0);
            setButtonActive('easy-btn add-poup');
        }
    };

    const handleChangeProduct = async (event) => {
        let productName = event.target.value;
        try {
            let result = await ProductServices.productSearch(productName);
            setProductList(result.data.product);
        } catch (error) {
            console.log(error);
        }
    }

    const addProduct = () => {
        if(productCount > 0){
            handelAdd(false);
        }
    };
    return (
        <>
            <div className="easy-product-popup show-poup">
                <div className="easy-product-wrapper">
                    <h3>Add products</h3>
                    <div className="easy-product-search">
                        <input type="text" placeholder="Searching all products" id="easy-product-text" className="easy-input-text easy-input" onChange={() => handleChangeProduct(event)}/>
                        <a href="javascript:;" id="easy-psearch">
                            <img src="/images/search-icon.svg" alt="search-icon" />
                        </a>
                    </div>
                    <div className="easy-product-list">
                        <ul>
                            <li>Products</li>
                            <li>Sku</li>
                            <li>Price</li>
                        </ul>
                        <div className="easy-plist">
                            {
                                productList.map((item, index) => (
                                    <ul className="easy-pdct-list" key={index}>
                                        <li className="item_detail1" key={index}>
                                            <input
                                                type="checkbox"
                                                id={"product-"+item.id}
                                                name={item.name}
                                                value={item.id} 
                                                className="easy-pdata"
                                                disabled=""
                                                onChange={handleCheckboxChange}
                                                checked={selectedValues.includes(item.id)}
                                            />
                                            <img src={item.primary_image.thumbnail_url} alt={item.name} />
                                            <span>{item.name}</span>
                                        </li>
                                        <li className="item_detail2">{item.sku}</li>
                                        <li className="item_detail3">{item.sale_price != 0 ? item.sale_price : item.price}</li>
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                    <p className="easy-info"><b>Note</b> : The products that are highlighted are disabled because they are already added<br /> in a different Subscription Group.</p>
                    <div className="easy-btn-wrapper easy-poup-btn">
                        <a href="javascript:;" className="easy-btn cancel-poup" onClick={closePopup}>Cancel</a>
                        <a href="javascript:;" className={buttonActive} onClick={addProduct}>Add  <span className="product-count">{productCount}</span> Products</a>
                    </div>
                </div>
            </div>
        </>
    )

}
export default CreateGroup;
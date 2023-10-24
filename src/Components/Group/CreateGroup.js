"use client"
import { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { useFormik } from "formik";
import * as Yup from "yup";
import ProductModel from "./ProductModel"
import Services from '../../services/ProductServices';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateGroup() {
    const [showProductModel, setShowProductModel] = useState(false);
    const [productArray, setProductArray] = useState([]);
    const [singleProductArray, setSingleProductArray] = useState([]);
    const [storeContext, setStoreContext] = useState([]);
    const [plan, setPlan] = useState([]);
    const [newPlan, setNewPlan] = useState(0);
    const [subscriptiontype, setSubscriptionType] = useState('one-time or on a recurring basis');
    const [planSummary, setPlanSummary] = useState(['1 Day']);
    const [showOffer, setShowOffer] = useState(false);

    const interVal = ['Day', 'Week', 'Month'];
    const ProductServices = new Services();
    const router = useRouter();

    //porductModelOpen
    const porductModelOpen = async () => {
        setShowProductModel(true);
    };

    function showProductModelFunc(data){
        setShowProductModel(false);
    }

    const addedProductAarry = async (data) => {
        setShowProductModel(false);
        let totalProduct = JSON.parse(localStorage.getItem("product"));
        if(totalProduct !== null){
            setSingleProductArray([]);
            if (Array.isArray(totalProduct)) {
                var result = totalProduct.map(function (x) { 
                    return parseInt(x, 10); 
                });
                try {
                    const results = await Promise.all(
                      result.map(async (item, index) => {
                        try {
                          const response = await ProductServices.singleProduct(item);
                          setSingleProductArray((singleProductArray) => [
                                ...singleProductArray,
                                response.data.product,
                            ]);
                            setStoreContext(response.data.bigCommerce.config.storeHash);
                        } catch (error) {
                          console.log(error);
                        }
                      })
                    );
                } catch (error) {
                    console.log(error); 
                } 
            }
        }
    }
    function deleteProductInList ( index) {
        const updateArray =  singleProductArray.filter((item) => item.id !== index)
        setSingleProductArray(updateArray);
        let products = localStorage.getItem("product");
        let productArrays = JSON.parse(products);
        if (productArrays.includes(`${index}`)) {
            let latestArray = productArrays.filter(item => item !== `${index}`);
            if(latestArray.length == 0){
                localStorage.removeItem("product");
            } else {
                localStorage.setItem("product", JSON.stringify(latestArray));
            }  
        }
    }

    const addNewSubscriptionPlan = (values) => {
        if(newPlan == 0){
            setPlan([...plan, newPlan]);
            setNewPlan(1);
        } else {
            setPlan([...plan, newPlan]);
            let number = newPlan + 1;
            setNewPlan(number);
        }
        setPlanSummary([...planSummary, '1 Day']);
        const newPlanRule = {deliver: 'Deliver every', number: 1, time: 'Day', };
        const newPlans = [...formik.values.planRule, newPlanRule];
        formik.setValues({ ...formik.values, planRule: newPlans });
    }

    const deleteSubscriptionRule = (indexToRemove) => {
        setPlan(plan.filter(item => item != indexToRemove));
        const newArray = planSummary.filter((element, index) => index !== indexToRemove);
        setPlanSummary(newArray);
    }

    useEffect(() => {   
        let productData = JSON.parse(localStorage.getItem("product"));
        if(productData != null){
            formik.setFieldValue('product', productData.join(","));
        }
    }, [singleProductArray, storeContext, plan, planSummary]);

    function subscriptionTypeChange(type){
        if(type == 2){
            setSubscriptionType('on a recurring basis');
            formik.setFieldValue('subscription_type', 2);
        } else {
            setSubscriptionType('one-time or on a recurring basis');
            formik.setFieldValue('subscription_type', 1);
        }
        
    }

    const ruleNmeberChange = (indexToChange, el) => {
        const fieldName = `planRule[${indexToChange}].number`;
        formik.setFieldValue(fieldName, el.target.value);
        let time = 'Day'
        if(formik.values.planRule[indexToChange].time != ''){
            time = formik.values.planRule[indexToChange].time;
        }
        let newIndex = indexToChange+1;
        planSummary[newIndex] = el.target.value+' '+time;
    }

    const ruleTimeChange = (indexToChange, el) => {
        const fieldName = `planRule[${indexToChange}].time`;
        formik.setFieldValue(fieldName, el.target.value);
        let ruleNmuber = formik.values.planRule[indexToChange].number;
        let newIndex = indexToChange+1;
        planSummary[newIndex] = ruleNmuber+' '+ el.target.value;
    }

    const numberChange = (el) => {
        formik.setFieldValue('number', el.target.value);
        let time = 'Day'
        if(formik.values.time != ''){
            time = formik.values.time;
        }
        planSummary[0] = el.target.value+' '+ time;
    }

    const timeChange = (el) => {
        formik.setFieldValue('time', el.target.value);
        let number = formik.values.number;
        planSummary[0] = number+' '+el.target.value;
    }

    const formValue = {
        gpname : '',
        subscription_type: '',
        planRule : [
            {
                deliver: 'Deliver every',
                number: 1,
                time: 'Day'
            },
        ],
        deliver : 'Deliver every',
        number : 1,
        time : 'Day',
        discount: '',
        product: '',
    };

    const onSubmit = async (values) => {
        let object = {};
        let planRule = values.planRule; 
        let array = null;
        let planData = [
            {
                'deliver' : values.deliver,
                'number' : values.number,
                'time' : values.time,
            }
        ]

        if(planRule.length == 0){
            array = planData;
        } else {
            planRule.pop();
            array = Array.from(planData).concat(planRule);
        }
        object.billing = JSON.stringify(array);
        object.groupname = values.gpname;
        object.type = values.subscription_type;
        object.product = values.product;
        object.discount = values.discount;

        try {
            const response = await ProductServices.groupAdd(object);
            localStorage.removeItem("product");
            toast.success('Group Add Succesfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setTimeout(function() {
                router.push('/group');
            }, 3000);
            
          } catch (error) {
            console.log(error);
          }
        
    };

    const ValidateSchema = Yup.object().shape({
        gpname: Yup.string().required("Group Name Required"),
        subscription_type: Yup.string().required("Select Subscription Type Required"),
    });

    const formik = useFormik({
        initialValues: formValue,
        validateOnBlur: true,
        onSubmit,
        validationSchema: ValidateSchema,
        enableReinitialize: true,
    });

    return (
        <>
            <div className="easy-group-create">
                <div className="easy-group-wrapper">
                    <div className="easy-title-bar">
                        <div className="easy-titles">
                            <h1>Create a subscription group</h1>
                        </div>
                    </div>
                    <div className="easy-create-body">
                        <div className="easy-groupc-left">
                            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                                <div className="easy-groupc-title">
                                    <h3>Group Name</h3>
                                    <input
                                        type="text"
                                        className="easy-input-text easy-input"
                                        id="easy-gp-name"
                                        name="gpname"
                                        placeholder="New Subscription Group"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.gpname}
                                    />
                                    {formik.touched.gpname && formik.errors.gpname ? (
                                        <p className="easy-error-name">{formik.errors.gpname}</p>
                                    ) : null
                                    }
                                </div>
                                <div className="easy-groupc-type">
                                    <h3>Subscription type</h3>
                                    <div className="easy-gpc-type">
                                        <div className="easy-gpc-item">
                                            <div className="easy-gpc-radio">
                                                <input 
                                                    type="radio" 
                                                    id="subscription-type-1" 
                                                    name="subscription_type"
                                                    className="easy-plan-type" 
                                                    onChange={()=>subscriptionTypeChange(1)}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.subscription_type}
                                                />
                                            </div>
                                            <div className="easy-gpc-lable">
                                                <label htmlFor="subscription-type-1">One-time + Subscription</label>
                                                <p>This gives option to your customers either to purchase the item as one time purchase or a recurring subscription.</p>
                                            </div>
                                        </div>
                                        <div className="easy-gpc-item">
                                            <div className="easy-gpc-radio">
                                                <input 
                                                    type="radio" 
                                                    id="subscription-type-2" 
                                                    name="subscription_type"
                                                    className="easy-plan-type"
                                                    onChange={()=>subscriptionTypeChange(2)}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.subscription_type}
                                                />
                                            </div>
                                            <div className="easy-gpc-lable">
                                                <label htmlFor="subscription-type-2">Subscription only</label>
                                                <p>This gives option to your customers to purchase the item on recurring basis.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {formik.touched.subscription_type && formik.errors.subscription_type ? (
                                        <p className="easy-error-name">{formik.errors.subscription_type}</p>
                                    ) : null}
                                </div>
                                <div className="easy-groupc-product">
                                    <div className="easy-gpc-product">
                                        <div className="easy-gpcp-left">
                                            <h3>Subscription products</h3>
                                            <p>Add the products for which you want to offer a subscription</p>
                                            <p className="easy-error-product"></p>
                                        </div>
                                        <div className="easy-gpcp-right">
                                            <div className="easy-btn-wrapper">
                                                <a href="javascript:;" className="easy-btn add-gpcproduct" onClick={porductModelOpen}>Add Products</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="easy-ajax-product">
                                        {
                                            singleProductArray && singleProductArray.map((item, index) => (
                                                <div class="easy-product-item" key={index}>
                                                    <div class="easy-product-img">
                                                        <img src={item.primary_image.thumbnail_url} alt={item.name}/>
                                                    </div>
                                                    <div class="easy-product-content">
                                                        <h5>{item.name}</h5>
                                                        <a href={'https://store-'+storeContext+'.mybigcommerce.com/manage/products/edit/'+item.id} target="_blank">View Details</a>
                                                    </div>
                                                    <div class="easy-product-del">
                                                        <a href="javascript:;" class="easy-product-del-action" onClick={() => deleteProductInList( item.id)}>
                                                            <img src="https://easysubscription.io/easydemo/wp-content/plugins/easy-subscription//admin/images/delete-icon-light.svg" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <input 
                                            type="hidden"
                                            name="product"
                                            value={formik.values.product}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                    </div>
                                    {formik.errors.singleProductArray ? (
                                        <p className="easy-error-name">{formik.errors.singleProductArray}</p>
                                    ) : null}
                                    
                                </div>
                                <div className="easy-groupc-plans">
                                    <h3>Subscription plans</h3>
                                    <p>Set the name and billing rules for your subscription group</p>
                                    <div className="easy-gpc-plan">
                                        <div className="easy-gpcp-name">
                                            <label>Name</label>
                                            <input 
                                                type="text" 
                                                className="easy-input-text easy-input easy-gpp-name" 
                                                name="deliver"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.deliver}
                                            />
                                        </div>
                                        <div className="easy-gpcp-number">
                                            <label>Billing Rules</label>
                                            <input 
                                                type="number" 
                                                className="easy-input-text easy-input easy-gpp-number"
                                                min="1"
                                                name="deliver"
                                                onChange={()=>numberChange(event)}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.number} 
                                            />
                                        </div>
                                        <div className="easy-gpcp-time">
                                            <label>Billing Rules</label>
                                            <select 
                                                className="easy-select easy-gptime-select easy-main-time" 
                                                name="name"
                                                value={formik.values.time}
                                                onChange={()=>timeChange(event)}
                                                onBlur={formik.handleBlur}
                                            >
                                                {
                                                    interVal.map((item, index) => (
                                                        <option value={item} key={index}>{item}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    {
                                        plan.map((item, index) => (
                                            <div class="easy-gp-rule" key={index}>
                                                <div class="easy-gpc-plan">
                                                    <div class="easy-gpcp-name">
                                                        <input type="text" 
                                                            class="easy-input-text easy-input easy-gpp-name"
                                                            name={`planRule[${index}].deliver`} 
                                                            placeholder="Deliver every"
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            value={formik.values.planRule[index].deliver}
                                                        />
                                                    </div>
                                                    <div class="easy-gpcp-number">
                                                        <input type="number" 
                                                            class="easy-input-text easy-input easy-gpp-number" 
                                                            min="1" 
                                                            name={`planRule[${index}].Rules`}
                                                            placeholder="Rules"
                                                            onChange={()=>ruleNmeberChange(index, event)}
                                                            onBlur={formik.handleBlur}
                                                            value={formik.values.planRule[index].number}
                                                        />
                                                    </div>
                                                    <div class="easy-gpcp-time">
                                                            <select 
                                                                class="easy-select easy-gptime-select" name={`planRule[${index}].time`}
                                                                value={formik.values.planRule[index].time}
                                                                onChange={()=>ruleTimeChange(index, event)}
                                                                onBlur={formik.handleBlur}
                                                            >
                                                                {
                                                                    interVal.map((item, index) => (
                                                                        <option value={item} key={index}>{item}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                            <a href="javascript:;" class="easy-rule-delete" onClick={()=>deleteSubscriptionRule(item)}>
                                                                <img src="/images/delete-icon.svg" alt="delete-icon" />
                                                            </a>
                                                        </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className="easy-gp-rule"></div>
                                    <a href="javascript:;" className="easy-gp-addrule" data-number="1" data-url="/images/delete-icon.svg" onClick={addNewSubscriptionPlan}><img src="/images/add-icon.svg" alt="/" /> Add plan</a>
                                </div>
                                <div className="easy-groupc-discount">
                                    <h3>Create a discount</h3>
                                    <p>Offer discounts for the subscription product</p>
                                    <input 
                                        type="checkbox" 
                                        id="easy-discount" 
                                        name='easy_discount'
                                        value={formik.values.easy_discount}
                                        onChange={()=> setShowOffer(!showOffer)}
                                        onBlur={formik.handleBlur}
                                    />
                                    <label htmlFor="easy-discount">{`Yes, I'd like to offer a discount`}</label>
                                    {
                                        showOffer && <div className="easy-discount-perct">
                                        <input 
                                            type="number" 
                                            className="easy-input-text easy-input" 
                                            id="easy-gpp-discount" 
                                            name="discount"
                                            placeholder="" 
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.discount}
                                            min = "0" max = "100"
                                            pattern="\d{3}"
                                        />
                                        <p>% off</p>
                                    </div>
                                    }
                                    
                                </div>
                                <div className="easy-btn-wrapper easy-big-btn">
                                    <button type="submit" className="easy-btn save-group">Save Group</button>
                                </div>
                            </form>
                        </div>
                        <div className="easy-groupc-right">
                            <div className="easy-titles-btn">
                                <div className="easy-btn-wrapper">
                                    <Link href="/group" className="easy-back-gp">Back</Link>
                                    <button type="submit" className="easy-btn save-group">Save</button>
                                </div>
                            </div>
                            <div className="easy-product-review">
                                <h3>Product preview</h3>
                                <ul>
                                    <li>
                                        <img src="/images/verify-check.svg" alt="verify-check" /> <span>Products can be purchased {subscriptiontype}</span>
                                    </li>
                                    <li>
                                        <img src="/images/verify-check.svg" alt="verify-check" /> <span>Product ships every <b className="easy-plan-text2">{planSummary.join(', ')}</b></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                showProductModel && (
                    <ProductModel handelClose={showProductModelFunc} handelAdd={addedProductAarry}/>
                )
            }
            <ToastContainer />
        </>
    )
}

export default CreateGroup;
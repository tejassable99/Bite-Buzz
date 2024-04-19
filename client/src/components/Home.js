import React, { useState, useEffect } from 'react';
import "./style.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Spinner } from 'react-bootstrap'; // Import Spinner component from react-bootstrap
import Form from 'react-bootstrap/Form'
const Home = () => {
    const [cartData, setCartData] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading state
    const dispatch = useDispatch();
    const [copydata, setCopyData] = useState([]);
    useEffect(() => {
        const fetchFoodData = async () => {
            try {
                const response = await axios.get(process.env.REACT_APP_API_URL); // Assuming your backend endpoint is '/api/cards'
                // Add a delay of 3000ms before setting the cart data
                setTimeout(() => {
                    setCartData(response.data);
                    setLoading(false); // Set loading to false after data is fetched
                }, 3000);
            } catch (error) {
                console.error('Error fetching food data:', error);
            }
        };
    
        fetchFoodData();
    }, []);

    // add to cart 
    const send = (e)=>{
        dispatch(addToCart(e));
    }

    const chanegData = (e) => {
        let getchangedata = e.toLowerCase();
    
        if (getchangedata == "") {
            setCopyData(cartData);
        } else {
            let storedata = cartData.filter((ele, k) => {
                return ele.dish.toLowerCase().includes(getchangedata) || ele.address.toLowerCase().includes(getchangedata);
            });
    
            setCopyData(storedata)
        }
    }
    

    return (
        <>
         <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text"
                        onChange={(e) => chanegData(e.target.value)}
                        placeholder="Search Food Item..." />
                </Form.Group>
                
            </Form>
            <section className='iteam_section mt-4 container'>
            <div style={{ display: "flex", alignItems: "center" }}>
            <h2 className='px-4' style={{ fontWeight: 600 }}>Food That Makes You Happy</h2>
                            <img src="https://img.freepik.com/premium-vector/yummy-smile-emoji-with-tongue-lick-mouth-delicious-tasty-food-symbol-social-network-yummy_192280-768.jpg" alt="Logo" style={{ height: "70px",  }} />
                          
                        </div>
         
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                    {loading ? (
                        // Display Bootstrap Spinner while loading
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) :
                        copydata.length ? copydata.map((element, index) => (
                            <Card key={index} style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                                <Card.Img variant='top' className='cd' src={element.imgdata}/>

                                <div className="card_body">
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h4 className='mt-2'>{element.dish}</h4>
                                        <span>{element.rating}&nbsp;★</span>
                                    </div>

                                    <div className="lower_data d-flex justify-content-between ">
                                        <h5>{element.address}</h5>
                                        <span>₹ {element.price}</span>
                                    </div>
                                    <div className="extra"></div>

                                    <div className="last_data d-flex justify-content-between align-items-center">
                                        <img src={element.arrimg} className='limg' alt="" />
                                        <Button style={{ width: "150px", background: "#ff3054db", border: "none" }} variant='outline-light'
                                            className='mt-2 mb-2'
                                            onClick={()=>send(element)}
                                        >Add TO Cart</Button>
                                        <img src={element.delimg} className='laimg' alt="" />
                                    </div>
                                </div>
                            </Card>
                        )): (
                        cartData.length ? cartData.map((element, index) => (
                            <Card key={index} style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                                <Card.Img variant='top' className='cd' src={element.imgdata}/>

                                <div className="card_body">
                                    <div className="upper_data d-flex justify-content-between align-items-center">
                                        <h4 className='mt-2'>{element.dish}</h4>
                                        <span>{element.rating}&nbsp;★</span>
                                    </div>

                                    <div className="lower_data d-flex justify-content-between ">
                                        <h5>{element.address}</h5>
                                        <span>₹ {element.price}</span>
                                    </div>
                                    <div className="extra"></div>

                                    <div className="last_data d-flex justify-content-between align-items-center">
                                        <img src={element.arrimg} className='limg' alt="" />
                                        <Button style={{ width: "150px", background: "#ff3054db", border: "none" }} variant='outline-light'
                                            className='mt-2 mb-2'
                                            onClick={()=>send(element)}
                                        >Add TO Cart</Button>
                                        <img src={element.delimg} className='laimg' alt="" />
                                    </div>
                                </div>
                            </Card>
                        )) : <p>No data found</p>
                    )}
                </div>
            </section>
        </>
    )
}

export default Home;

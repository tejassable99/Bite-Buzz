import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Headers = () => {
    const { carts } = useSelector((state) => state.allCart);

    return (
        <>
            <Navbar fixed="top" style={{ height: "60px", background: "purple", color: "white" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-2">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img src="../delivery-man.png" alt="Logo" style={{ height: "65px", marginRight: "10px" }} />
                            <h3 className='text-light'>Bite Buzz!!!</h3>
                        </div>
                    </NavLink>
                    <NavLink to="/cart" className="text-decoration-none text-light mx-2">
                        <div id='ex4'>
                            <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                        </div>
                    </NavLink>
                </Container>
            </Navbar>
        </>
    );
}

export default Headers;

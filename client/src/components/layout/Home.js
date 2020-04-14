import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <section className="home">
            <div className="darkOverlay">
                <div className="home-inner">
                    <h1 className="h1">Contacts</h1>
                    <div className="buttons">
                        <Link to="/register" class="btn btn-primary">Register</Link>
                        <Link to="/login" class="btn btn-primary">Login</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;
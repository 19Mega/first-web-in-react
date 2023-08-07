import React from "react";
import rigo from "../../img/rigo-baby.jpg"

const Card = () => {
    return(
        <div>
            <div className="card my-3 mx-auto" style={{width:"18rem"}}>
            <img src={rigo} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                </div>

                <div class="card-footer">
                <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>



            </div>
        </div>
    )
}

export default Card;
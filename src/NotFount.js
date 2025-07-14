import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
                <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <h1 className="mt-5">404 Not Found</h1>
            <p className="py-4">
                Sorry, the page you are looking for does not exist. 
             
            </p>
          </div>
        </div>
      </div>

     );
}

export default NotFound;
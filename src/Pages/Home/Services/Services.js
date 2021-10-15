import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('services.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div className="container-fluid">
            <h3 className="text-center py-4">Our Services</h3>
            <Row xs={1} md={3} className="g-3 mt-3">
                {
                   services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;
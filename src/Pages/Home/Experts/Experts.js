
import { Row } from 'react-bootstrap';
import Expert from '../Expert/Expert';
import mechanic1 from '../../../images/mechanics/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanics/mechanic-2.jpg';
import mechanic3 from '../../../images/mechanics/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanics/mechanic-4.jpg';

const experts= [
    {
        img: mechanic1,
        name: 'John Anderson',
        expertize:'Engine Expert',
    },
    {
        img: mechanic2,
        name: 'Andrew Smith',
        expertize:'Polish Expert',
    },
    {
        img: mechanic3,
        name: 'Zakaria Ali',
        expertize:'Coloring Expert',
    },
    {
        img: mechanic4,
        name: 'Chris Martin',
        expertize:'Engine Expert',
    }
];

const Experts = () => {
    return (
        <div className="container-fluid">
            <h3 className="text-center py-4">Our Experts</h3>
            <Row xs={1} md={4} className="g-3 mt-3">
                {
                  experts.map( expert => <Expert expert={expert}></Expert>)
                }
            </Row>
        </div>
    );
};

export default Experts;
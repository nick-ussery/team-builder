import React from 'react';
// import {Link} from 'react-router-dom';
import {Card, CardBody, CardText, CardTitle, Col} from 'reactstrap';

export default function MemberCard(props){
    // console.log('props given to memberCard', props);
   const {username, email, role, onEdit} = props;
    
    return(
        <Col>
        <Card style={{border: '1px solid black',
                    textAlign: 'center',
                    width: '200px'
                    }}>
            <CardTitle style={{fontSize: '24px'}}>{username}</CardTitle>
            <CardBody>Role: {role}</CardBody>
            <CardText>Email: {email}</CardText>
            <button onClick={onEdit}>EDIT</button>
        </Card>
        </Col>
    )
}
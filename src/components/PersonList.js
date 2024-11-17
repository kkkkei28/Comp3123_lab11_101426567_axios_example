import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

class PersonList extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10')
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      });
  }

  render() {
    return (
      <Container>
        <h1 className="text-center my-4">User List</h1>
        <Row>
          {this.state.persons.map(person => (
            <Col md={6} key={person.login.uuid} className="mb-4">
              <Card style={{ backgroundColor: '#17a2b8', color: 'white' }}>
                <Card.Body>
                  <Card.Title>{person.name.title} {person.name.first} {person.name.last}</Card.Title>
                  <Card.Img
                    variant="top"
                    src={person.picture.large}
                    alt={`${person.name.first} ${person.name.last}`}
                    style={{ borderRadius: '50%', width: '100px', height: '100px' }}
                  />
                  <Card.Text>
                    <strong>User Name:</strong> {person.login.username}<br />
                    <strong>Gender:</strong> {person.gender.toUpperCase()}<br />
                    <strong>Time Zone Description:</strong> {person.location.timezone.description}<br />
                    <strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country} - {person.location.postcode}<br />
                    <strong>Email:</strong> {person.email}<br />
                    <strong>Birth Date and Age:</strong> {new Date(person.dob.date).toLocaleDateString()} ({person.dob.age})<br />
                    <strong>Register Date:</strong> {new Date(person.registered.date).toLocaleDateString()}<br />
                    <strong>Phone#:</strong> {person.phone}<br />
                    <strong>Cell#:</strong> {person.cell}
                  </Card.Text>
                  <Button variant="primary">Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default PersonList;

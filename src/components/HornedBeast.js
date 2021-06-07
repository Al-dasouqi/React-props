import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likesCounter: 0
        }
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imgURL} onClick={this.likes} alt={this.props.title} title={this.props.title} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <Button variant="primary" onClick={this.likes}>Likes😾: {this.state.likesCounter}</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    likes = () => {
        this.setState({
            likesCounter: this.state.likesCounter + 1
        })
    }
}
export default HornedBeast;
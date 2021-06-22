import React from 'react';
import HornedBeast from './HornedBeast'
import CardColumns from 'react-bootstrap/CardColumns'


class Main extends React.Component {
  render() {
    return (
      <CardColumns>
      <div>
        {this.props.data.map(item => {
          return (
            <HornedBeast
              title={item.title}
              imgURL={item.image_url}
              description={item.description}
            />
          )
        })}
      </div>
      </CardColumns>
    )
  }
}
export default Main;
=======

class Main extends React.Component {

    render() {
      return (
        <CardColumns>
        <div>
          {this.props.data.map(item => {
            return (
              <HornedBeast
                title={item.title}
                imgURL={item.image_url}
                description={item.description}
              />
            )
          })}
        </div>
        </CardColumns>
      )
    }
  }
  export default Main;


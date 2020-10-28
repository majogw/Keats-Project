import React from 'react';
import {useHistory} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    props;
    this.state = {
      activeID: 0,

      panelStyle: {
        background: this.props.data[0].colour,
      },
      buttonHover: false,
      buttonStyle: {
        color: '#ffffff',
      },
    };
  }
  _changeActive(id) {
    this.setState({
      activeID: id,

      panelStyle: {
        backgroundColor: this.props.data[id].colour,
      },
    });
  }
  _buttonColour() {
    if (!this.state.buttonHover) {
      this.setState({
        buttonHover: true,
        buttonStyle: {
          color: this.props.data[this.state.activeID].colour,
        },
      });
    } else {
      this.setState({
        buttonHover: false,
        buttonStyle: {
          color: '#ffffff',
        },
      });
    }
  }
  render() {
    return (
      <section className='wrapper' style={this.state.wrapperStyle}>
        <Selectors
          data={this.props.data}
          activeID={this.state.activeID}
          _changeActive={this._changeActive.bind(this)}
        />
        <Panel
          data={this.props.data[this.state.activeID]}
          panelStyle={this.state.panelStyle}
          buttonStyle={this.state.buttonStyle}
          _buttonColour={this._buttonColour.bind(this)}
        />
      </section>
    );
  }
}
class Panel extends React.Component {
  render() {
    return (
      <aside className='panel' style={this.props.panelStyle}>
        <h2 className='panel-header'>{this.props.data.header}</h2>
        <p className='panel-info'>{this.props.data.body}</p>
        <button
          className='panel-button'
          style={this.props.buttonStyle}
          onMouseEnter={this.props._buttonColour}
          onMouseLeave={this.props._buttonColour}
        >
          Read More
        </button>
      </aside>
    );
  }
}
class Selectors extends React.Component {
  _handleClick(e) {
    if (this.props.id !== this.props.activeID) {
      this.props._changeActive(this.props.id);
    } else {
      return;
    }
  }
  render() {
    return (
      <div className='selectors'>
        {this.props.data.map((item) => (
          <Selector
            key={item.id}
            id={item.id}
            _handleClick={this._handleClick}
            _changeActive={this.props._changeActive}
            activeID={this.props.activeID}
          />
        ))}
      </div>
    );
  }
}
class Selector extends React.Component {
  render() {
    let componentClass = 'selector';
    if (this.props.activeID === this.props.id) {
      componentClass = 'selector active';
    }
    return (
      <div
        className={componentClass}
        onClick={this.props._handleClick.bind(this)}
      ></div>
    );
  }
}

const data = [
  {
    id: 0,
    header: 'Bicycle',
    body: 'Cosassos xolo solo ejemplo...',
    colour: '#242846',
  },
  {
    id: 1,
    header: 'Post-Otra pagina',
    body: 'palabras y otras cosass para ejemplo ...',
    colour: '#ba9077',
  },
  {
    id: 2,
    header: ' Party con DJ David Getta ',
    body: 'tomorrow party in Boom...',
    colour: '#1ABC9C',
  },
  {
    id: 3,
    header: 'Recetas de Christina',
    body: 'Recetas rapidas para cena...',
    colour: '#C0392B',
  },
  {
    id: 4,
    header: 'cervezas artesanales',
    body: 'la preparacion de la cerveza artesanal...',
    colour: '#513B56',
  },
];

ReactDOM.render(<App data={data} />, document.querySelector('#app'));

import React from 'react';

class MyComponents extends React.Component {
  /**
   * jsx return block: chi co phan tu o ngoai cung chi co mot phan tu
   * bat buoc tra ve mot phan tu
   * dunf react.fragment, k can boc ngoai
   *
   * this:
   */
  //key:value
  state = {
    name: 'thanh',
    class: 'he14',
  };
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    //let name = 'thanh';
    return (
      // <React.Fragment>
      // </React.Fragment>

      //   <div className='abc'>
      // <div className='first'>
      //   {console.log('hello ', name)}
      //   hello my world of {name}
      // </div>
      // <div className='second'>abc</div>
      //   </div>
      <>
        <div className='first'>
          {/* {console.log('hello ', name)} */}
          <input
            value={this.state.name}
            type='text'
            onChange={(event) => this.handleOnChangeName(event)}
          ></input>
          <br></br>
          Hello :{this.state['name']}
        </div>
        <div className='second'>My class : {this.state.class}</div>
      </>
    );
  }
}
export default MyComponents;

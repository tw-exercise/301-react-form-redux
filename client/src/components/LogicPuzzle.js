import React, {Component} from 'react';

export default class LogicPuzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHasLogic: false
    }
  }

  setLogic(e) {
    this.setState({isHasLogic: !this.state.isHasLogic})
  }

  inputInteger(e) {
    if (e.target.value.length == 1) {
      e.target.value = e.target.value.replace(/[^1-9]/g, '')
    } else {
      e.target.value = e.target.value.replace(/\D/g, '')
    }
  }

  render() {
    return (<div className='form-group logic-puzzle-type'>
      <form className='form-horizontal' role='form'>
        <div className='form-group'>
          <label htmlFor='logic-puzzle' className='col-sm-2 control-label'>逻辑题</label>
          <div className='col-sm-10 checkbox'>
            <label>
              <input type='checkbox' id='logic-puzzle' onClick={this.setLogic.bind(this)}/>
            </label>
          </div>
        </div>
        <div className='col-sm-offset-2 col-sm-8 no-padding'>
          <div className='col-sm-4'>
            <label htmlFor='simple' className='col-xs-5 control-label'>简单</label>
            <div className='col-xs-7 no-padding'>
              <input type='text' id='simple' className='form-control type'
                     disabled={this.state.isHasLogic ? '' : 'disabled'}
                     onKeyUp={this.inputInteger.bind(this)}/>
            </div>
          </div>
          <div className='col-sm-4'>
            <label htmlFor='normal' className='col-xs-5 control-label'>一般</label>
            <div className='col-xs-7 no-padding'>
              <input type='text' id='normal' className='form-control type'
                     disabled={this.state.isHasLogic ? '' : 'disabled'}
                     onKeyUp={this.inputInteger.bind(this)}/>
            </div>
          </div>
          <div className='col-sm-4'>
            <label htmlFor='complex' className='col-xs-5 control-label'>困难</label>
            <div className='col-xs-7 no-padding'>
              <input type='text' id='complex' className='form-control type'
                     disabled={this.state.isHasLogic ? '' : 'disabled'}
                     onKeyUp={this.inputInteger.bind(this)}/>
            </div>
          </div>
        </div>
      </form>
    </div>);
  }
}
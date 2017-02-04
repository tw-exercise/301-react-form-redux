import React, {Component} from 'react';

export default class SubmitButton extends Component {
  render() {
    return (<div className='row no-margin'>
      <div className='col-sm-6 text-right'>
        <button className='btn submitButton' onClick={this.props.savePaper}>保存</button>
      </div>
      <div className='col-sm-6 text-left'>
        <button className='btn submitButton' onClick={this.props.cancelPaper}>取消</button>
      </div>
    </div>);
  }
}
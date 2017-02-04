import React, {Component} from 'react';

export default class SubmitButton extends Component {
  render() {
    const paper = {
      name: this.props.paperInfo.name,
      description: this.props.paperInfo.description,
      sections: [this.props.logicPuzzle, this.props.homeworkQuiz]
    };

    return (<div className='row no-margin'>
      <div className='col-sm-6 text-right'>
        <button className='btn submitButton' onClick={this.props.savePaper(paper)}>保存</button>
      </div>
      <div className='col-sm-6 text-left'>
        <button className='btn submitButton' onClick={this.props.cancelPaper(paper)}>取消</button>
      </div>
    </div>);
  }
}
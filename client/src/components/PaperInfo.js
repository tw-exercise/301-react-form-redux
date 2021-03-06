import React, {Component} from 'react';

export default class PaperInfo extends Component {
  getPaperInfo() {
    this.props.getPaperInfo({name: this.name.value, description: this.description.value})
  }

  render() {
    return (<div>
      <form className='form-horizontal' role='form'>
        <div className='form-group'>
          <label htmlFor='paper-ame' className='col-sm-2 control-label'>试卷名称</label>
          <div className='col-sm-10'>
            <input type='text' className='form-control' id='paper-ame' placeholder='请输入试卷名称' maxLength="32"
                   ref={(ref) => {
                     this.name = ref;
                   }}
                   onChange={this.getPaperInfo.bind(this)}/>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='description' className='col-sm-2 control-label'>试卷描述</label>
          <div className='col-sm-10'>
            <textarea className='form-control' id='description' placeholder='请输入试卷描述' maxLength="256"
                      ref={(ref) => {
                        this.description = ref;
                      }}
                      onChange={this.getPaperInfo.bind(this)}>
            </textarea>
          </div>
        </div>
      </form>
    </div>);
  }
}
import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { Field, reduxForm } from 'redux-form';

class CreatePost extends React.Component {


  renderError({ error, touched }) {
      if (touched && error) {
        return (
          <div className="ui error message">
            <div className="header">{error}</div>
          </div>
        );
      }
    }

    renderInput = ({ input, label, meta }) => {
      const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
      return (
        <div className={className}>
          <label>{label}</label>
          <input {...input} autoComplete="off" />
          {this.renderError(meta)}
        </div>
      );
    }

    onSubmit = formValues => {
      this.props.createPost(formValues);
    };

    render() {
      return (
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field name="title" component={this.renderInput} label="Enter Title" />
          <Field name="body" component={this.renderInput} label="Enter Description" />

          <div className="field">
            <label>Select User</label>
          <Field name="userId" component="select">
          <option >Select User</option>
                      <option value="1">Leanne Graham</option>
                      <option value="2">Ervin Howell</option>
                      <option value="3">Clementine Bauch</option>
                      <option value="4">Patricia Lebsack</option>
          </Field>
          </div>


          <button className="ui button primary">Submit</button>
        </form>
      );
    }

}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.body) {
    errors.body = 'You must enter a description';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'Createpost',
  validate
})(CreatePost);

export default connect(
  null,
  { createPost }
)(formWrapped);

//export default CreatePost;

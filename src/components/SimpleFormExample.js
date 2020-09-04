
import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// import classes from '*.module.css';
const useStyles = ((theme) => ({
    root: {
      flexGrow: 1,
      width :'100%',
      height :"300px"
  
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    dashboard :{
      color : 'white'
    },
    media: {
      height: 140,
    }
  }));
// @withStyles(styles)
 class SimpleFormExample  extends React.Component {
    state = {
        formData: {
            email: '',
            password: '',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <div >
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2>Simple form</h2>
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <TextValidator
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    value={formData.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
            </div>
        );
    }
}
export default SimpleFormExample;
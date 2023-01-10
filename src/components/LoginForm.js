import PropTypes from 'prop-types'
import { Button, Form } from 'react-bootstrap'

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
}) => {
  return (
    <div>
      <h4>Login</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <div>
            <Form.Label>username</Form.Label>: &nbsp;
            <Form.Control id='username' type="text" value={username} name="Username" onChange={handleUsernameChange} />
          </div>
          <div>
            <Form.Label>password</Form.Label>: &nbsp;
            <Form.Control id='password' type="password" value={password} name="Password" onChange={handlePasswordChange} />
          </div>
          <Button variant="primary" id="login-button" type="submit">login</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm
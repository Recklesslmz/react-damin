/**
 * Created by limuzi on 2017/8/28.
 */
import React from 'react'
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import login from '../css/login.css'
const FormItem = Form.Item;
const Login = () => {
  const loginStyle = {
    backgroundColor: '#108ee9',
    marginTop: 20
  }
  const app = document.querySelector('#root')
  app.style.background = loginStyle.backgroundColor
  return (
    <div className={login.mainState}>
      <div className={login.title}>Ant Design</div>

      <div className={login.loginState}>
        <Input style={{color: 'red'}} prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="Username"/>
        <Input style={{marginTop: 20}} prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
               placeholder="Password"/>
      </div>
      <div style={{width:'40%',textAlign:'center',marginLeft:'30%',marginTop:'2%'}}>
        <Button style={{width:'100%'}} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </div>

    </div>
  )
}

export default Login

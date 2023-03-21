import React from 'react';
import Button from './UI/Button';
import { AiOutlineMail } from 'react-icons/ai';

import classes from './Login.module.css';
import MES from '../assets/images/Login/factoryIcon.svg';
import Input from './UI/Input';

const Login = () => {
  return (
    <div>
      <div className={classes.logo}>
        <img src={MES} alt="MES" />
      </div>
      <form>
        <Button btnColor="#B2BEC3" type="outline">
          <div className={classes['form-group']}>
            <AiOutlineMail />
            <Input type="text" value="email" />
          </div>
        </Button>
        <Button disabled={true}>LOGIN</Button>
      </form>
    </div>
  );
};

export default Login;

import { useState, useEffect } from "react";
import validation from "../form/validation"
import style from "../form/Form.module.css"


const Form =({ login })=> {

const [userData, setUserData] = useState({
        email: '',
        password: '',
});
    
const [errors, setErrors] = useState({
    email: '',
    password: '',
  });


const handleChange = (event) => {
    setUserData({
        ...userData, 
        [event.target.name]: event.target.value
    })

}
const handleSubmit = (event) => {
   event.preventDefault();
   login(userData);
}
    useEffect(()=>{
        if(userData.email !== '' || userData.password !== ''){
        const userValidated = validation(userData);
        setErrors(userValidated);
    }
    }, [userData])

    return (
      <div className={style.container}>
      
        <div className={style.loginform}>
          
          <form onSubmit={handleSubmit}>  
          
          <div className={style.inputcontainer}>
            <label htmlFor="email"></label>
              
              <input
                type="email"
                placeholder="Ingrese un email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className={style.input}
              />
           <p className={style.errors}>{errors.email}</p>

            <br/>

    <br />
            <label htmlFor="password"></label>
              <input
                type="password"
                placeholder="Ingrese un password"
                id="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                className={style.input}
              />
            <p className={style.errors}>{errors.password}</p>
            <br />

            <button type='submit' className={style.button40}>Submit</button>
        </div>
          </form>
        </div>
        </div>
      );
    }

export default Form;


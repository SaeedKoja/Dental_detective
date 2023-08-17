
const validation =(email,password)=>{
    let errors ={}
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (!email){
        errors.email="Email Required"
    }

    else if(email.length<5){
        errors.email="Email invalid"
    }

    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        errors.email='email invalid'
    }

    if (!password){
        errors.password="Password Required"
    }

    else if (!passwordRegex.test(password)){
       errors.password="Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number. "
    }


    return errors
}

export default validation
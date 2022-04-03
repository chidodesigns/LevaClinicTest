import React from 'react';
import classes from './FormContainer.module.css'
function FormContainer({children}) {
  return (
    
    <div className={`${classes.form_container}`}>
        <div>
            {children}
        </div>   
    </div>
    );
}

export default FormContainer;

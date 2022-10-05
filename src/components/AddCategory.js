import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {

    const [inputValue, setValue] = useState('');

    const handleInputChange = (e) => {
        setValue (e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategorias( cats => [inputValue, ...cats]);
            setValue('');
        }
        
    }

  return (
    <form onSubmit= { handleSubmit }>
        <input 
            type="text"
            value = { inputValue }
            onChange = { handleInputChange }
        />
    </form>
  )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

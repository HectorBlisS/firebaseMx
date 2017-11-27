import React from 'react';

export const CustomInput = ({label=null,onChange, name, value, required=true, placeholder, type="text", maxLength, ...rest}) => (
    <div>
    <span>{label}</span>
    <input className="custom-input" {...rest} name={name} onChange={onChange} value={value} required={required} placeholder={placeholder} type={type}/>
        {maxLength ? maxLength - value.length:null}
    </div>
        );

export const CustomTextArea = ({onChange, name, value, required=true, placeholder, type="text", ...rest}) => (
    <textarea className="custom-textarea" {...rest} name={name} onChange={onChange} value={value} required={required} placeholder={placeholder} type={type}/>
);

export const CustomSubmit = ({value}) => (
    <input className="custom-submit" type="submit" value={value}/>
);
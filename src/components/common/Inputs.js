import React from 'react';
import {LinearProgress} from 'material-ui';

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

export const CustomFileInput = ({accept, onChange, value, completed}) => {
    let theInput;
    let image = "http://www.iconarchive.com/download/i98345/dakirby309/simply-styled/Mac-Preview.ico";
    if (value) image = value;
    return(
        <div style={{backgroundImage:`url(${image})`}} onClick={()=>{theInput.click()}} className="custom-file-input">
            <h4>Sube tu portada</h4>
            {completed > 0 && completed < 99 ? <span><LinearProgress mode="determinate" value={completed} color="orange" />{completed}%</span>:null}
            <input ref={input=>theInput=input} onChange={onChange} hidden accept={accept + "/*"} type="file"/>
        </div>
    );

};
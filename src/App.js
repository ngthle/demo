import React, { Component, useState, useEffect, useRef } from 'react';
import { checkRegExp, checkRegExpValue } from './formatting.js';

const InputDynamic = ({label, type, specificType, name, className, defaultValue, parentData, handleParentData}) => {
  const [data, setData] = useState(defaultValue);
  const [checkDataResult, setCheckDataResult] = useState(checkRegExpValue(specificType, defaultValue));

  useEffect(() => {
      const newIsValid = {...parentData.isValid, [name]: checkDataResult};
      const newData = {...parentData, isValid: newIsValid, [name]: data};
      handleChange(name);
      // setCheckDataResult(checkRegExpValue(specificType, data));     
  }, [data]);

  const handleChange = (name) => {
    handleParentData(prevData =>
    prevData.map((item) =>
      item.name === name ? { ...item, value: data } : item
    ));
  };

  useEffect(() => {
    console.log(checkDataResult);
  }, [checkDataResult]);

  return (
    <div className={className}>
    <label>{label}</label>
    <input type={type} name={name} defaultValue={defaultValue}
    onBlur={(e) => {
      setData(e.target.value);
      setCheckDataResult(checkRegExp(specificType, e));
    }} />
    <div className="checking-message">{checkDataResult}</div>
  </div>
  );
}

const InputParent = () => {

  const [parentData, setParentData] = useState([]);
  const [result, setResult] = useState("hehe");

  useEffect(() => {
    const dataArr = [
      {label: "First Name", type: "text", specificType: "name", name: "firstName", className: "untitled", value: "John"},
      {label: "Last Name", type: "text", specificType: "name", name: "lastName", className: "untitled", value: "Doe"},
      {label: "Email", type: "email", specificType: "email", name: "email", className: "untitled", value: "johndoe@gmail.com"},
      {label: "Phone Number", type: "text", specificType: "phone", name: "phoneNumber", className: "untitled", value: "0987654321"}
    ];
    setParentData(dataArr);
  }, []);

  useEffect(() => {
    console.log(parentData);
    const l = parentData.length;
    let n = 1;
    parentData.map(inputItem => {
      const r = checkRegExpValue(inputItem.specificType, inputItem.value);
      if (r !== true) {
        setResult("Need change");
        console.log("l: " + l);
        return;
      } else {
        if (n < l) {
          n++;
        } else {
          setResult("Valid");
        }
      }
    });
  }, [parentData]);

  const handleParentData = (x) => {
    setParentData(x);
  }

  return (
    <div>
    {/* <InputDynamic label="First Name" type="text" specificType="name" name="firstName" className="untitled" defaultValue="John" parentData={parentData} handleParentData={handleParentData}/>  
    <InputDynamic label="Last Name" type="text" specificType="name" name="lastName" className="untitled" defaultValue="Doe" parentData={parentData} handleParentData={handleParentData}/>    
    <InputDynamic label="Email" type="email" specificType="email" name="email" className="untitled" defaultValue="johndoe@gmail.com" parentData={parentData} handleParentData={handleParentData}/>
    <InputDynamic label="Phone Number" type="text" specificType="phone" name="phoneNumber" className="untitled" defaultValue="0987654321" parentData={parentData} handleParentData={handleParentData}/> */}
    {parentData.map((item) => {
      return (
        <InputDynamic key={item.name} label={item.label} type={item.type} specificType={item.specificType} name={item.name} className={item.className} defaultValue={item.value} parentData={parentData} handleParentData={handleParentData}/>
      )
    })}
    <button>{result}</button>
    </div>  
  );
}

export default InputParent;
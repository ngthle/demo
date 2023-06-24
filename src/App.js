import React, { Component, useState, useEffect, useRef } from 'react';
import { checkRegExp, checkRegExpValue } from './formatting.js';

const InputDynamic = ({label, type, specificType, name, className, defaultValue, parentData, handleParentData}) => {
  const [data, setData] = useState(defaultValue);
  const [checkDataResult, setCheckDataResult] = useState(checkRegExpValue(specificType, defaultValue));

  useEffect(() => {
    const newIsValid = {...parentData.isValid, [name]: checkDataResult};
    const newData = {...parentData, isValid: newIsValid, [name]: data};
    handleParentData(newData);
  }, [data]);

  // handleParentData(data);

  useEffect(() => {
    // console.log(checkDataResult);
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

  const [parentData, setParentData] = useState({isValid : {}});
  const [result, setResult] = useState("hehe");

  useEffect(() => {
    const obj = {...parentData.isValid};
    console.log(JSON.stringify(obj));
    const l = Object.keys(obj).length;
    console.log("l: " + l);
    let n = 1;
    for (let inputItem in obj) {
      if (obj[inputItem] !== true) {
        setResult("Need change");
        return;
      } else {
        if (n < l) {
          n++;
        } else {
          setResult("Valid");
        }
      }
    }
  }, [parentData]);

  // const dataArr = [
  //   {label: "First Name", type: "text", specificType: "name", name: "firstName", className: "untitled", defaultValue: "John8"},
  //   {label: "Last Name", type: "text", specificType: "name", name: "lastName", className: "untitled", defaultValue: "Doe8"},
  //   {label: "Email", type: "email", specificType: "email", name: "email", className: "untitled", defaultValue: "johndoe@gmail.com"},
  //   {label: "Phone Number", type: "text", specificType: "phone", name: "phoneNumber", className: "untitled", defaultValue: "0987654321"}
  // ];

  return (
    <div>
    <InputDynamic label="First Name" type="text" specificType="name" name="firstName" className="untitled" defaultValue="John8" parentData={parentData} handleParentData={x => setParentData(x)}/>  
    <InputDynamic label="Last Name" type="text" specificType="name" name="lastName" className="untitled" defaultValue="Doe8" parentData={parentData} handleParentData={x => setParentData(x)}/>    
    <InputDynamic label="Email" type="email" specificType="email" name="email" className="untitled" defaultValue="johndoe@gmail.c" parentData={parentData} handleParentData={x => setParentData(x)}/>
    <InputDynamic label="Phone Number" type="text" specificType="phone" name="phoneNumber" className="untitled" defaultValue="0987654321" parentData={parentData} handleParentData={x => setParentData(x)}/>
    {/* {dataArr.map((item) => {
      return (
        <InputDynamic key={item.name} label={item.label} type={item.type} specificType={item.specificType} name={item.name} className={item.className} defaultValue={item.defaultValue} parentData={parentData} handleParentData={x => setParentData(x)}/>
      )
    })} */}
    <button>{result}</button>
    </div>  
  );
}

export default InputParent;
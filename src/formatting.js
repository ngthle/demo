// import React from 'react';

// const checkSpace = (e) => {
//   e.target.value = e.target.value.replace(/ $/, '');
// };

// const checkValid = (e) => {
//   e.target.value = e.target.value.replace(/  /g, ' ').replace(/^ /, '');
// };

// const removeSpace = (e) => {
//   e.target.value = e.target.value.replace(/ /g, '').replace(/ $/, '').replace(/^ /, '');
// };

const isTimePassed = (str) => {
  const [year, month, day] = str.split('-');
  const publishTime = new Date(+year, month - 1, +day);
  const currentTime = new Date();
  let timeSpan = (publishTime.getTime() - currentTime.getTime())/1000;
  return (timeSpan > 0);
}

const timeFormat = (str) => {
  const newStr = new Date(str).toLocaleDateString('en-GB', {month: 'short', day: '2-digit', year: 'numeric'});
  return newStr;
}

const checkRegExp = (type, e) => {

  if ((type === "name")&&(e.target.value !== "")) {
    e.target.value = e.target.value.replace(/\s+/g, ' ').replace(/^ /, '').replace(/ $/, '');
    const regExpAlphabet =  new RegExp('^[a-zA-Z ]+$');
    if (regExpAlphabet.test(e.target.value)) {
      return true;
    } else {
      return "Sorry, only alphabet characters are allowed.";
    }
  }

  if ((type === "text")&&(e.target.value !== "")) {
    e.target.value = e.target.value.replace(/\s+/g, ' ').replace(/^ /, '').replace(/ $/, '');
    const regExpAlphabet =  new RegExp('^[a-zA-Z ]+$');
    if (regExpAlphabet.test(e.target.value)) {
      return true;
    } else {
      return "Sorry, only alphabet characters are allowed.";
    }
  }

  // if ((type === "email")&&(e.target.value !=="")) {
  //   const regExpEmail = new RegExp('^[a-z]+[a-z0-9\.\-]+[a-z0-9]+@[a-zA0-9]{2,}[\.]+([a-z0-9\.]{2,6}$)');
  //   if (regExpEmail.test(e.target.value)) {
  //     return true;
  //   } else {
  //     return "Please enter a valid email address."
  //   }
  // }

  if (type === "email") {
    if (e.target.value !== "") {
      const regExpEmail = new RegExp('^[a-z]+[a-z0-9\.\-]+[a-z0-9]+@[a-zA0-9]{2,}[\.]+([a-z0-9\.]{2,6}$)');
      if (regExpEmail.test(e.target.value)) {
        return true;
      } else {
        return "Please enter a valid email address."
      }
    } else {
      return undefined;
    }
  }

  if ((type === "password")&&(e.target.value !=="")) {
    // const regExpPassword =  new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[/@])[a-zA-Z0-9@]{8,}$');
    const regExpPassword =  new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9@]{8,}$');
    if (regExpPassword.test(e.target.value)) {
      return true;
    } else {
      return "Your passwords must be at least 8 characters long, and contain at least one letter and one digit."
    }
  }

  if ((type === "phone")&&(e.target.value !=="")) {
    const regExpPassword =  new RegExp('^[0-9@]{10,11}$');
    if (regExpPassword.test(e.target.value)) {
      return true;
    } else {
      return "Please enter a valid mobile phone number."
    }
  }

}

const checkRegExpValue = (type, value) => {

  if ((type === "name")&&(value !== "")) {
    // value = value.replace(/\s+/g, ' ').replace(/^ /, '').replace(/ $/, '');
    const regExpAlphabet =  new RegExp('^[a-zA-Z ]+$');
    if (regExpAlphabet.test(value)) {
      return true;
    } else {
      return "Sorry, only alphabet characters are allowed.";
    }
  }

  if ((type === "nameMod")&&(value !== "")) {
    value = value.replace(/\s+/g, ' ').replace(/^ /, '').replace(/ $/, '');
    const regExpAlphabet =  new RegExp('^[a-zA-Z ]+$');
    if (regExpAlphabet.test(value)) {
      return true;
    } else {
      return "Sorry, only alphabet characters are allowed.";
    }
  }

  if (type === "email") {
    if (value !== "") {
      const regExpEmail = new RegExp('^[a-z]+[a-z0-9\.\-]+[a-z0-9]+@[a-zA0-9]{2,}[\.]+([a-z0-9\.]{2,6}$)');
      if (regExpEmail.test(value)) {
        return true;
      } else {
        return "Please enter a valid email address."
      }
    } else {
      return undefined;
    }
  }

  if ((type === "password")&&(value !=="")) {
    // const regExpPassword =  new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[/@])[a-zA-Z0-9@]{8,}$');
    const regExpPassword =  new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9@]{8,}$');
    if (regExpPassword.test(value)) {
      return true;
    } else {
      return "Your passwords must be at least 8 characters long, and contain at least one letter and one digit."
    }
  }

  if ((type === "phone")&&(value !=="")) {
    const regExpPassword =  new RegExp('^[0-9@]{10,11}$');
    if (regExpPassword.test(value)) {
      return true;
    } else {
      return "Please enter a valid mobile phone number."
    }
  }  
}

export default isTimePassed;
export {timeFormat, checkRegExp, checkRegExpValue};
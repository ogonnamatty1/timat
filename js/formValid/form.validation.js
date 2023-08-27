// Commonly used regular expression

// Check 2-9 characters, false if not matched, true if matched
const validateName = (name) => {
   const reg = /^[\u4e00-\u9fa5]{2,9}$/;
   return reg.test(name);
};
// Verify phone number
const validatePhoneNum = (mobile) => {
   const reg = /^1[3,4,5,6,7,8,9]\d{9}$/;
   const regPhone = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
   return regPhone.test(mobile);
};
// Check passwords consisting of 6 to 18 uppercase and lowercase alphanumeric underscores
const validatePassword = (password) => {
   const reg = /^[a-zA-Z0-9_]{6,18}$/;
   return reg.test(password);
};
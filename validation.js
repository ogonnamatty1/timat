// // import { request } from 'axios';
// // import postusers  from './js/modules/postData.js';

// const urlApply = "https://timat-backend.vercel.app/api/timatech/apply";
// const form = document.querySelector('#form');
// const frontendResponse = document.querySelector('.api_response')
// const whatsappGroup = document.querySelector('.whatsapp-group>a')



// function addNewStudent(studentData, url) {

//     // let axiosdata = JSON.stringify(studentData);

//     // let config = {
//     //     method: 'post',
//     //     maxBodyLength: Infinity,
//     //     url: 'https://timat-backend.vercel.app/api/timatech/apply',
//     //     headers: { 
//     //         'Content-Type': 'application/json'
//     //     },
//     //     data : axiosdata
//     // };

//     // request(config).then((response) => {
//     //     return JSON.stringify(response.data);
//     // })
//     // .catch((error) => {
//     //     console.log(error);
//     // });


//     var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify(studentData);

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow',
// };

// fetch("http://localhost:5000/api/timatech/apply/", {...requestOptions, mode: 'no-cors',
//     headers: {
//         "Content-Type": "application/json",
//         'Accept': 'application/json, text/plain, */*',
//         credentials: "omit", //
//         // "Content-Type": "application/x-www-form-urlencoded",
//     },
// })
//   .then(response => response)
//   .catch(error => console.log('error', error));
// }


// // async function _postData(url = '', data = {}) {
// //     const response = await fetch(url, {
// //         method: 'POST',
// //         mode: 'cors',
// //         cache: 'no-cache',
// //         credentials: 'same-origin',
// //         redirect: 'follow',
// //         referrerPolicy: 'no-referrer',
// //         headers: {
// //             "Content-type": "application/json; charset=UTF-8"
// //         },
// //         body: JSON.stringify(data)
// //     });
    
// //     return response.json();
// // }




// form.addEventListener('submit', async (e)=>{
   
//     e.preventDefault();
//     const name = document.querySelector('#name').value;
//     const phone = document.querySelector('#phone').value;
//     const email = document.querySelector('#email').value;
//     const userData = {name, phone, email };
   
    
//     console.log('working');
//     // const handleRegister = await fetch(url, {
//     //     method:'POST',
//     //     headers:{
//     //         "Content-Type":"application/json"
//     //     },
//     //     body:JSON.stringify({name, phone, email, }),
//     //     return handleRegister;
//     // })
//     // console.log('handleRegister', handleRegister);
//    console.log("userdata", userData);
//    console.log("userdata json", JSON.stringify(userData));
//    addNewStudent(userData)
// //    _postData('http://127.0.0.1:8080', userData)
//     //   try {
//         //    postusers(urlApply, userData)
//         //    .then((res) => {
//         //         console.log(res?.message); // JSON data parsed by `data.json()` call
//         //         if((res?.message === 'E-mail already exist') || (res?.message === "Phone number already exist") ||(res?.message ==="Invalid phone number")) {
//         //             frontendResponse.style.color = 'red'
//         //             console.log(frontendResponse);
//         //         } else {
//         //             frontendResponse.style.color = 'green'
//         //             whatsappGroup.textContent= 'Click to join our whatsapp group'
//         //             setTimeout(()=> {frontendResponse.textContent="", form.reset()}, 5000)
//         //         }
//         //         return frontendResponse.textContent = res?.message
                
//         //     });
            
//         // } catch (error) {
//         //     return frontendResponse.textContent = 'Network issue contact your network provider'
//         // }
       
// }) 





import postusers  from './js/modules/postData.js';
const urlApply = "http://127.0.0.1:8000/api/timatech/apply";

const form = document.querySelector('#form');
const frontendResponse = document.querySelector('.api_response')
const whatsappGroup = document.querySelector('.whatsapp-group>a')


form.addEventListener('submit', async (e)=>{
   
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;
    
    const data = {name, phone, email }
   
    
    const datafile = {
        image: "string | Url",
        title: "string",
        content: "string",
        youtube_link: "string | Url",
    }

    console.log('working');
    try {
        postusers('http://localhost:8000/api/v1/story', datafile).then((res) => {
            console.log(res?.message); // JSON data parsed by `data.json()` call
            if((res?.message === 'E-mail already exist') || (res?.message === "Phone number already exist") ||(res?.message ==="Invalid phone number")) {
                frontendResponse.style.color = 'red'
                console.log(frontendResponse);
            } else {
                frontendResponse.style.color = 'green'
                whatsappGroup.textContent= 'Click to join our whatsapp group'
                setTimeout(()=> {frontendResponse.textContent="", form.reset()}, 5000)
            }
            return frontendResponse.textContent = res?.message
            
        });
        
    } catch (error) {
        return frontendResponse.textContent = 'Network issue contact your network provider'
    }


    //Only use this if your api is not available... 
    //just a small frontend get around implementation
    try {
        if (!data){
            return frontendResponse.textContent = 'Network issue contact your network provider'
        }
        frontendResponse.style.color = 'green'
        setTimeout(()=> {frontendResponse.textContent="", form.reset()}, 5000)
        
        return whatsappGroup.textContent= 'Click to join our whatsapp group'
    } catch (error) {
        
    }
    
            if (!data){
                return frontendResponse.textContent = 'Network issue contact your network provider'
            }
            frontendResponse.style.color = 'green'
            setTimeout(()=> {frontendResponse.textContent="", form.reset()}, 5000)
            return whatsappGroup.textContent= 'Click to join our whatsapp group'
    
}) 






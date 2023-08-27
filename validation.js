import postusers  from './js/modules/postData.js';
//Todo 1. - replace url
//Replace this endpoint with your hosted server(vercel) endpoint
const urlApply = "http://127.0.0.1:8000/api/timatech/apply";

const form = document.querySelector('#form');
const frontendResponse = document.querySelector('.api_response')
const whatsappGroup = document.querySelector('.whatsapp-group>a')


form.addEventListener('submit', async (e)=>{
   
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;
    
    const data = { name, phone, email }

    //Todo 2. //Pending till you get your api to work
    // try {
    //     postusers(urlApply, data).then((res) => {
    //         //Replace the conditional check here of 
    //         //"(res?.message === 'E-mail already exist') || (res?.message === "Phone number already exist") ||(res?.message ==="Invalid phone number")" 
    //         // to (res?.statusCode !== 200 || res?.statusCode !== 201)
    //         //Todo - (Note) - only when your endpoint starts working
    //         console.log(res?.message); // JSON data parsed by `data.json()` call
    //         if((res?.message === 'E-mail already exist') || (res?.message === "Phone number already exist") ||(res?.message ==="Invalid phone number")) {
    //             frontendResponse.style.color = 'red'
    //             console.log(frontendResponse);
    //         } else {
    //             frontendResponse.style.color = 'green'
    //             whatsappGroup.textContent= 'Click to join our whatsapp group'
    //             setTimeout(()=> {frontendResponse.textContent="", form.reset()}, 5000)
    //         }
    //         return frontendResponse.textContent = res?.message
            
    //     });
    // } catch (error) {
    //     return frontendResponse.textContent = 'Network issue contact your network provider'
    // }


    //Only use this if your api is not available... 
    //just a small frontend get around implementation pending till you get your api to work
    try {
        if (!data){
            return frontendResponse.textContent = 'Network issue contact your network provider'
        }
        frontendResponse.style.color = 'green'
        setTimeout(()=> {frontendResponse.textContent="", form.reset()}, 5000)
        
        return whatsappGroup.textContent= 'Click to join our whatsapp group'
    } catch (error) {
        throw new Error(error.message)
    }
}) 






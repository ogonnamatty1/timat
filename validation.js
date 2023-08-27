
import postusers  from './js/modules/postData.js';
const urlApply = "https://timat-backend.vercel.app/api/timatech/apply";
const form = document.querySelector('#form');
const frontendResponse = document.querySelector('.api_response')
const whatsappGroup = document.querySelector('.whatsapp-group>a')


form.addEventListener('submit', async (e)=>{
   
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;
    const email = document.querySelector('#email').value;
    const userData = {name, phone, email };
   
    
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
        if (!userData){
            return frontendResponse.textContent = 'Network issue contact your network provider'
        }
        frontendResponse.style.color = 'green'
        setTimeout(()=> {frontendResponse.textContent="", form.reset()}, 5000)
        
        return whatsappGroup.textContent= 'Click to join our whatsapp group'
    } catch (error) {
        
    }
    
            if (!userData){
                return frontendResponse.textContent = 'Network issue contact your network provider'
            }
            frontendResponse.style.color = 'green'
            setTimeout(()=> {frontendResponse.textContent="", form.reset()}, 5000)
            return whatsappGroup.textContent= 'Click to join our whatsapp group'
    
}) 






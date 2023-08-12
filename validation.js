
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
   
    
    // console.log('working');
    // const handleRegister = await fetch(url, {
    //     method:'POST',
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     body:JSON.stringify({name, phone, email, }),
    //     return handleRegister;
    // })
    // console.log('handleRegister', handleRegister);
   
      try {
           postusers(urlApply, data).then((res) => {
                console.log(res?.message); // JSON data parsed by `data.json()` call
                if((res?.message === 'email already exist') || (res?.message === "phone number already exist") ||(res?.message ==="invalid phone number")) {
                    frontendResponse.style.color = 'red'
                    console.log(frontendResponse);
                } else {
                    frontendResponse.style.color = 'green'
                    whatsappGroup.textContent= 'click to join whatsapp group'
                    setTimeout(()=> {frontendResponse.textContent="", form.reset()}, 5000)
                }
                return frontendResponse.textContent = res?.message
                
            });
            
        } catch (error) {
            return frontendResponse.textContent = 'network issue'
        }
       
}) 






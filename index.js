// document.querySelector('.topname').addEventListener('click',(event)=>{
//     event.preventDefault(); 

//     document.querySelector('.js_home_com').scrollIntoView({
//         behavior: 'smooth' 
//     });
// })

document.querySelector('.js_home').addEventListener('click',(event)=>{
    event.preventDefault(); 

    document.querySelector('.js_home_com').scrollIntoView({
        behavior: 'smooth' 
    });
})

document.querySelector('.js_about').addEventListener('click',(event)=>{
    event.preventDefault(); 

    document.querySelector('.js_home_com').scrollIntoView({
        behavior: 'smooth' 
    });
})

document.querySelector('.js_skill').addEventListener('click',(event)=>{
    event.preventDefault();

    document.querySelector('.line2').scrollIntoView({
        behavior:'smooth'
    })
})

document.querySelector('.js_proj').addEventListener('click',(event)=>{
    event.preventDefault();

    document.querySelector('.js_projects').scrollIntoView({
        behavior:'smooth'
    })
})

document.querySelector('.js_contact').addEventListener('click',(event)=>{
    event.preventDefault();

    document.querySelector('.js_tab').scrollIntoView({
        behavior:'smooth'
    })
})


const dynamicText = document.querySelector(".adding");

const words = ["UI/UX Designer","UI Developer","Front End Developer","Web Designer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () =>{
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0,charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stopBlink")

    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect,200);
    }else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect,100);
    }else{
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        dynamicText.classList.remove("stopBlink")
        setTimeout(typeEffect,1200);
    }
}

typeEffect();

document.querySelector('.js_EMAIL').addEventListener('submit',(event)=>{
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        return;
    }

    let mailtoLink = `mailto:imjai6504@gmail.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AReply to: ${email}`;
    
    window.location.href = mailtoLink;

})

       const messageInput=document.getElementById("messageInput");
       const submitButton=document.getElementById("submitButton");
       const deliveredMessage=document.getElementById("deliveredMessage");

       submitButton.addEventListener('click',()=>{
        const messageText = messageInput.value.trim();
        if(messageText){
            deliveredMessage.innerHTML=`<li>${messageText}<\li>`;
            messageInput.value="";
        }else{
            alert('Type the message');
        }
       });


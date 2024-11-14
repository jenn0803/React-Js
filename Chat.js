function sendMsg(personInput, personMsgStyle){
    const msg = document.getElementById(personInput).value;
    if(msg){
        let msgNode = document.createElement('DIV');
        msgNode.classList.add('msgStyle', personMsgStyle);
        msgNode.textContent =  msg;
        // add time to msgNode
        let date = new Date();
        let minutes = date.getMinutes();
        let time = (date.getHours() > 12) ? (date.getHours() % 12 || 12)+':'+minutes+'pm' : (date.getHours())+':'+minutes+'am';
        let sub = document.createElement("sub");
        sub.innerText = time;
        sub.classList.add('spanStyle');
        msgNode.appendChild(sub);
        document.getElementById('MessageContainer').appendChild(msgNode);
        document.getElementById(personInput).value = '';
        document.getElementById('MessageContainer').scrollTop = document.getElementById('MessageContainer').scrollHeight;
    } else{
        document.getElementById(inputOf).focus();
    }
}

document.getElementById('clientInput').addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        event.preventDefault();
        sendMsg('clientInput', 'clientMsgStyle');
    }
});

document.getElementById('developerInput').addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        event.preventDefault();
        sendMsg('developerInput', 'developerMsgStyle');
    }
});

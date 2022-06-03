const messages = (state) => {
    let prevTime = new Date();

    const messageList = document.querySelector('.group-dialogue-messages-list');

    messageList.innerHTML = '';

    state.getCurrentChannel().messages.forEach(item => {
        if(item.text.includes(state.searchQuery)) {
            const message = document.createElement('div'),
                profilepic = document.createElement('img'),
                name = document.createElement('span'),
                time = document.createElement('span'),
                text = document.createElement('span'),
                wrapperFlDc = document.createElement('div'),
                nameWrapper = document.createElement('div'),
                textWrapper = document.createElement('div');
    
            profilepic.setAttribute('src', item.order['profilepic']);
            name.textContent = item.order.name;
            name.classList.add('name');
            time.textContent = convertTime(item.time);
            time.classList.add('time');
            text.textContent = item.text;
            text.classList.add('text');
    
            nameWrapper.append(name);
            nameWrapper.append(time);
            textWrapper.append(text);
    
            wrapperFlDc.classList.add('fl-dc');
            wrapperFlDc.append(nameWrapper);
            wrapperFlDc.append(textWrapper);
    
            message.append(profilepic);
            message.append(wrapperFlDc);
    
          message.classList.add('group-dialogue-messages-list-item')
          messageList.append(message);
        }

    })

    
    function convertTime(ms) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    
        let timeString = '';
        const time = new Date();
        const current = time,
        currentMs = current.getTime();
        time.setTime(ms);
    
        const month = monthNames[time.getMonth()],
            days = addZero(time.getDay());
            hours = addZero(time.getHours()),
            minutes = addZero(time.getMinutes());
        if(time.getTime() - prevTime.getTime() > 86400000) {
            messageList.append(Divider(`${month} ${days}`));
        }
        if (currentMs - ms < 86400000) {
            timeString = ` ${hours}:${minutes}`;
        }
        else {
            timeString = ` ${month} ${days}, ${hours}:${minutes}`
        }
        prevTime.setTime(time.getTime());
        return timeString;
    }
    function Divider(text) {
        const divider = document.createElement('div'),
            textField = document.createElement('div');
        
        divider.append(textField);
        textField.textContent = text;
        divider.classList.add('group-dialogue-messages-list-divider');
    
        return divider;
    }
    
    function addZero(num) {
        if (num < 10) {
            return `0${num}`;
        }
        else return num;
    }
}

export default messages;
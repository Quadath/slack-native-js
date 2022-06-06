const messages = (state) => {
    let prevTime = new Date();
    prevTime.setTime(0);

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
    
            if (item.time - prevTime.getTime() < 60000) {
                wrapperFlDc.classList.add('m47');
            }
            else {       
                nameWrapper.append(name);
                nameWrapper.append(time);
                message.append(profilepic);
            }
            textWrapper.append(text);
    
            wrapperFlDc.classList.add('fl-dc');
            wrapperFlDc.append(nameWrapper);
            wrapperFlDc.append(textWrapper);
    
            message.append(wrapperFlDc);
    
          message.classList.add('group-dialogue-messages-list-item')
          messageList.append(message);
          prevTime.setTime(item.time);
          message.addEventListener('click', (e) => {
            if(e.target.className == 'name') {
                state.setState('selectedUser', e.target.textContent);
            }
          })
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
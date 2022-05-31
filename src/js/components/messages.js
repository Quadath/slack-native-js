const messages = (state) => {
    const messageList = document.querySelector('.group-dialogue-messages-list');

    state.getCurrentChannel().messages.forEach((item, index) => {
        const message = document.createElement('div'),
            profilepic = document.createElement('img'),
            name = document.createElement('span'),
            time = document.createElement('span'),
            text = document.createElement('span'),
            wrapperFlDc = document.createElement('div'),
            nameWrapper = document.createElement('div'),
            textWrapper = document.createElement('div');

        profilepic.setAttribute('src', item.order['profile-pic']);
        name.textContent = item.order.name;
        name.classList.add('name');
        time.textContent = item.time;
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

    })

}

export default messages;
( function IIFE() {
    const sendButton = document.querySelector(".send button");
    const toSend = document.querySelector(".to-send");
    if(toSend && sendButton) {
      sendButton.disabled = !toSend.value;
      toSend.addEventListener('input', (e) => {
        if(e.target.value) {
          sendButton.disabled = false;
        } else {
          sendButton.disabled = true;
        }
      });
    }

    const loginButton = document.querySelector(".login button");
    const login = document.querySelector(".login input");
    if(login && loginButton) {
        loginButton.disabled = !login.value;
        login.addEventListener('input', (e) => {
            if(e.target.value) {
                loginButton.disabled = false;
            } else {
                loginButton.disabled = true;
            }
        });
    }

    const state = {
        selectedUsers : new Set()
    }

    const users = document.querySelectorAll('.user > .username');
    const messages = document.querySelectorAll('.message');

    const unSelectAllButton = document.createElement('button');
    unSelectAllButton.innerText = 'unselect all';
    unSelectAllButton.className = 'button-unselect';
    unSelectAllButton.style.display = 'None';
    
    users.forEach(userElement => {
        userElement.addEventListener('click', event => {
            const username = event.target.innerText;
            if(event.target.classList.toggle('selected')){
                state.selectedUsers.add(username);
            }else{
                state.selectedUsers.delete(username);
            }
            displayMessages();
        });
    });

    unSelectAllButton.addEventListener('click', event => {
        state.selectedUsers.clear()
        users.forEach(userElement => userElement.classList.remove('selected'));
        displayMessages();
    });
    

    function displayMessages(){
        if(state.selectedUsers.size === 0){
            messages.forEach(messageElement => {
                messageElement.classList.remove('hide');
            });
            unSelectAllButton.style.display = 'None';
        }else{
            unSelectAllButton.style.display = 'inline-block';
            messages.forEach(messageElement => {
                const username = messageElement.querySelector('.meta-info > .sender-info > .username').innerText;
                if (state.selectedUsers.has(username)){
                    messageElement.classList.remove('hide');
                }else{
                    messageElement.classList.add('hide');
                }
            });
        }
        showIndicators();
    }

    function showIndicators(){
        clearIndicators();
        const messages = document.querySelectorAll('.messages > li');
        messages.forEach((li, index, nodeList) => {
            if (li.querySelector('.message').classList.contains('hide') ){
            
                if(index === 0 || !nodeList[index - 1].querySelector('.hide')) {
                    const indicator = document.createElement('p');
                    indicator.className = 'indicator';
                    indicator.innerText = '1 message hidden';
                    li.prepend(indicator);
                }else{
                    const indicators = document.querySelectorAll('.indicator');
                    const indicator = indicators[indicators.length - 1];
                    indicator.innerText = indicator.innerText[0] === 1 ? '2 messages hidden' : (parseInt(indicator.innerText[0]) + 1) + ' messages hidden';
                }
            }
        })
    }

    function clearIndicators(){
        document.querySelectorAll('.indicator').forEach(indicatorElement => indicatorElement.remove());
    }

    if(document.querySelector('.users')){
        document.querySelector('.users').appendChild(unSelectAllButton);
    }

    if(document.querySelector('.messages')){
        displayMessages();
    }

  })();

var container = document.createElement("div");

var piano = document.createElement('div');
piano.classList.add('container');

for(let i = 1; i < 6; i++){
    let key = document.createElement('span');
    key.setAttribute('id',i);
    key.innerText = i;
    key.style.width = '20%';
    key.style.height = '450px';
    key.classList.add('key');
    key.addEventListener('click', exec_sound.bind(i));
    piano.appendChild(key);
}

container.appendChild(piano);
document.body.appendChild(container);

window.addEventListener('keyup', exec_sound);

function exec_sound () {
    var urls = ['23.wav','24.wav','25.wav','24.wav','29.wav'];
    var sounds = [];
    for(let i = 0; i < urls.length; i++){
        sounds[i] = document.createElement('audio');
        sounds[i].src = 'sounds/'+urls[i];
    }
    let tecla;
    console.log(this);
    if(event.key){
        tecla = document.getElementById(event.key);
    }else{
        tecla = document.getElementById(this);
    }

    if(tecla){
        tecla.classList.add('active');
        setTimeout(function() {
    
            tecla.classList.remove('active');
        }, 500);
        switch (tecla.innerText) {
            case "1":
                sounds[0].play();
            break;
            case "2":
                sounds[1].play();
            break;
            case "3":
                sounds[2].play();
            break;
            case "4":
                sounds[3].play();
            break;
            case "5":
                sounds[4].play();
            break;
        }
    }

}





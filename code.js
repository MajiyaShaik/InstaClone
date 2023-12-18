
let random = Math.floor(Math.random() * 20 + 1);

document.querySelector('.count').innerHTML = random;

document.querySelector('.follow').innerHTML = Math.floor(Math.random() * 10000);

document.querySelector('.following').innerHTML = Math.floor(Math.random() * 100);

fetch('https://randomuser.me/api/')
     .then(response => {
        response.json()
        .then(data => {
            let user = data.results[0];
            console.log(user)

            document.querySelector('.profname').innerHTML = user.name.first;
            document.querySelector('.flname').innerHTML = user.name.first+' '+user.name.last
            document.querySelector('.profimg').src = user.picture.medium


        })
    })
    for(let i=0; i<random; i++) {

            let img = document.createElement('img')

            img.src = 'https://picsum.photos/12'+i;

            document.querySelector('.pics').append(img)

    }
        
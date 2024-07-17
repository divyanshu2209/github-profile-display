const profile = document.getElementById('profile-photo')
const follower = document.getElementById('followers')
const submit = document.getElementById('submit')
const input = document.getElementById('username-input')

let username;
submit.addEventListener('click', function(){
    username = input.value;
    const url = `https://api.github.com/users/${username}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url,true)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                profile.innerHTML = `<img src="${data.avatar_url}" alt="Profile Photo" width="100">`;
                follower.innerHTML = `Followers: ${data.followers}`;
            } else {
                profile.innerHTML = 'Error fetching profile photo';
                follower.innerHTML = 'Error fetching followers count';
            }
        }
    };
    input.value = '';
    xhr.send();


});



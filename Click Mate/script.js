const name = document.querySelector('#name');
const relation = document.querySelector('#relation');
const addFriend = document.querySelector('#add');
const image = document.querySelector('#image')
const removeFriend = document.querySelector('#remove');

const defaultProfile = {
    name: 'Mohammad Umar',
    relation: 'Me!',
    image: 'Umar.jpg',
    color: 'black'
};

const friends = [];

const sampleFriends = [
    {
        name: 'Kareem Nazeer',
        relation: 'Jigri',
        image: 'kareem.jpg',
        color: 'green'
    },
    {
        name: 'Ali Shah',
        relation: 'Cousin',
        image: 'ali.jpg',
        color: 'green'
    },
    {
        name: 'Mohammad Mustafa',
        relation: 'Bhai',
        image: 'mustafa.jpg',
        color: 'green'
    },
    {
        name: 'Abdul Malik',
        relation: 'Dost',
        image: 'abdul.jpg',
        color: 'green'
    }
];

let currIndex = 0;

addFriend.addEventListener('click', () => {
    
    if(currIndex < sampleFriends.length){
        const newFriend = sampleFriends[currIndex];
        friends.push(newFriend);

        name.innerHTML = newFriend.name;
        relation.innerHTML = newFriend.relation;
        image.src = newFriend.image;
        name.style.color = newFriend.color;

        currIndex++;
    }
    else{
        alert("More data to add, Limit has been reached.")
    }
});

removeFriend.addEventListener('click', () => {
    if(friends.length > 0){
        friends.pop();

        const lastFriend = friends[friends.length -1];

        if(lastFriend){
            // Show the data of previous friend
            name.innerHTML = lastFriend.name;
            relation.innerHTML = lastFriend.relation;
            image.src = lastFriend.image;
            name.style.color = lastFriend.color;
        } else {
            // Stack is empty, revert to default
            name.innerHTML = defaultProfile.name;
            relation.innerHTML = defaultProfile.relation;
            image.src = defaultProfile.image;
            name.style.color = defaultProfile.color;
            currentIndex = 0;
        } 
    } else {
        alert("All friends has been removed!");
    }
});
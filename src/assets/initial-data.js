export const users = [
    {
        "email": "a@b.in",
        "password": "react",
        "loggedIn": false,
        "todos": [
            {
                title: 'First user - todo1', 
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut magna velit. Maecenas id ligula nibh. Vivamus blandit euismod iaculis. ', 
                createdAt: '1/6/19', 
                big: false, 
                completed: false
            }, 
            {
                title: 'First user - todo2', 
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut magna velit. Maecenas id ligula nibh. Vivamus blandit euismod iaculis. ', 
                createdAt: '2/6/19', 
                big: false, 
                completed: false
            }
        ]
    },
    {
        "email": "c@d.in",
        "password": "angular",
        "loggedIn": false,
        "todos": [
            {
                title: 'Second user - todo1', 
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut magna velit. Maecenas id ligula nibh. Vivamus blandit euismod iaculis. ', 
                createdAt: '1/6/19', 
                big: false, 
                completed: false
            }, 
            {
                title: 'Second user - todo2', 
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut magna velit. Maecenas id ligula nibh. Vivamus blandit euismod iaculis. ', 
                createdAt: '2/6/19', 
                big: false, 
                completed: false
            }
        ]
    },
    {
        "email": "e@f.in",
        "password": "vue",
        "loggedIn": false,
        "todos": [
            {
                title: 'Third user - todo1', 
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut magna velit. Maecenas id ligula nibh. Vivamus blandit euismod iaculis. ', 
                createdAt: '1/6/19', 
                big: false, 
                completed: false
            }, 
            {
                title: 'Third user - todo2', 
                detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut magna velit. Maecenas id ligula nibh. Vivamus blandit euismod iaculis. ', 
                createdAt: '2/6/19', 
                big: false, 
                completed: false
            }
        ]
    }
];

(function setLocalStorage(){
    localStorage.setItem('users', JSON.stringify(users));
})();
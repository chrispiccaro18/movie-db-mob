const config = {
    apiKey: 'AIzaSyC8RBblrwHfd4dt_hfpSCc6ujYj-T_LWe4',
    authDomain: 'user-demo-c6218.firebaseapp.com',
    databaseURL: 'https://user-demo-c6218.firebaseio.com',
    projectId: 'user-demo-c6218',
    storageBucket: 'user-demo-c6218.appspot.com',
    messagingSenderId: '152685907346'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
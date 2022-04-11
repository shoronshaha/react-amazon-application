/*
1. create a new firebase project in console.google.com
2. npm install firebase
3. create firebase.init.js and import getAuth to export auth
4. firebase settings > authentication > enable Email and password auth
5. Create Login, signup component, setup route
6. attach form field handler and form submit handler
7. npm install --save react-firebase-hooks
8. useCreateUserWithEmailAndPassword form react-firebase-hooks
9. if user is created redirect to the expected page
10. useSignInWithEmailAndPassword for sign In.
11. Create RequireAuth component ==> check user exists also tract user location
12. In route wrap Protected Component by using Require Auth Component
*/



// firebase hosting steps
// 1.npm install -g firebase-tools (one time for my computer)
// 2.firebase login (one time for my computer)
// 3.firebase init (for each project one time)
// 4. npm run build (every time i want to build your project)
// 5.firebase deploy (every time i want to build your project)
//var deferredPrompt;

if ('serviceWorker' in navigator) {
    //This returns a promise
    navigator.serviceWorker.register('../../sw.js', /*{scope:'/help/'}*/) //override with scope on what files it need to control
        .then(() => {
            console.log("Registration is completed successfully");
        }); //Tell browser that this should be trated in a special way and used as background process
}

/*

//Unregister a service worker
navigator.serviceWorker.getRegistrations().then(function(registrations) {
 for(let registration of registrations) {
  registration.unregister()
} })



*/

/*window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); //Chrome wont show the banner //Deferrign the app install banner
    deferredPrompt = e;
    return false;
});*/

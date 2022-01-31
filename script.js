const videoElement = document.querySelector('video');
const button = document.querySelector('#button');
const refresh = document.querySelector('#refresh');

const selectMediaStream = async () =>{
    try {
        // Select media stream
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Pass it to videoElement
        videoElement.srcObject = mediaStream;
        // When it is finished loading, play it
        videoElement.onloadedmetadata = ()=>{
            videoElement.play()
        }
    }
    catch(error){
        console.log(error)
    }
}
button.addEventListener('click', async ()=> {
    // Hide button until the picture in picture is loaded
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
})

// Refresh the page on clicking the refresh button
refresh.addEventListener('click', ()=> {
    window.location.reload();
})

selectMediaStream();
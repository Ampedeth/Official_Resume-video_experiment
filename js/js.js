// adding action for button to change photos
const btnCnahgePhoto = document.getElementById('btnChangePhoto')
btnCnahgePhoto.addEventListener('mouseover', () => {btnCnahgePhoto.style.background = 'rgba(0, 0, 0, .1)'});
btnCnahgePhoto.addEventListener('mouseout', () => {btnCnahgePhoto.style.background = 'transparent'});

const minePhoto1 = document.getElementById('img1');
const minePhoto2 = document.getElementById('img2');
const minePhoto3 = document.getElementById('img3');
const minePhoto4 = document.getElementById('img4');
const minePhoto5 = document.getElementById('img5');
const minePhoto6 = document.getElementById('img6');
const minePhoto7 = document.getElementById('img7');
const minePhoto8 = document.getElementById('img8');
const minePhoto9 = document.getElementById('img9');

let currentPhoto = minePhoto1;

function show (){
    switch (currentPhoto) {
        case minePhoto1:
            currentPhoto.style.display = 'none';
            currentPhoto = minePhoto2;
            break;
        case minePhoto2:
            currentPhoto.style.display = 'none';
            currentPhoto = minePhoto3;
            break;
        case minePhoto3:
            currentPhoto.style.display = 'none';
            currentPhoto = minePhoto4;
            break;
        case minePhoto4:
            currentPhoto.style.display = 'none';
            currentPhoto = minePhoto5;
            break;
        case minePhoto5:
            currentPhoto.style.display = 'none';
            currentPhoto = minePhoto6;
            break;
        case minePhoto6:
            currentPhoto.style.display = 'none';
            currentPhoto = minePhoto7;
            break;
        case minePhoto7:
            currentPhoto.style.display = 'none';
            currentPhoto = minePhoto8;
            break;
        case minePhoto8:
            currentPhoto.style.display = 'none';
            currentPhoto = minePhoto9;
            break;
        case minePhoto9:
            currentPhoto.style.display = 'none';
            currentPhoto = minePhoto1;
            break;
        default:
           break;
        }
        currentPhoto.style.display = 'block';
    }
btnCnahgePhoto.addEventListener('click', show);

//------------------------------//
//------------------------------//

//Adding Rick Roll video
const RickRollContainer = document.getElementById('videoContainerId')
const RickRollVideo = document.getElementById('rickRollVideo');
const RickRollButton = document.getElementById('rickRoll');

RickRollButton.addEventListener('click', () => {
    if (RickRollVideo.paused){
        RickRollVideo.play();
        RickRollContainer.style.display = 'block'; 
    }
    else {
        RickRollVideo.pause();
        RickRollContainer.style.display = 'none';
        RickRollVideo.currentTime = 0;
    }
});
RickRollVideo.addEventListener('ended', () => {
    RickRollContainer.style.display = 'none';
})
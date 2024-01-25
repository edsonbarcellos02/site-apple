var count = 1;

document.getElementById('btn-radio-1').checked = true;
setInterval(()=>{
    nextImage();
},4000);

function nextImage()
{
    count ++;
    if(count > 5){
        count = 1;
    }
    document.getElementById(`btn-radio-${count}`).checked = true;
}
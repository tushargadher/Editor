const imageUpload = document.querySelector(".imageUpload");
const inputFile = document.querySelector("#InputFile");
const UploadedImg = document.querySelector("#UploadedImg");
const slider = document.querySelector(".slider");
const brithness = document.querySelector("#brithness");
const contrast = document.querySelector("#contrast");
const saturation = document.querySelector("#saturation");
const warmth = document.querySelector("#warmth");
let brithnessV, contrastV, saturationV, warmthV;


imageUpload.addEventListener('click', () => {
    //here we are adding click event to the input type file so we can uplaod image
    inputFile.click();
})


//here we are adding change event to the inputFile and we use normal function beacuse this keyword can't work with fat arrow function
inputFile.addEventListener('change', function () {
    UploadedImg.style.display = "inline";
    // URL.createObjectURL static method creates a string containing a URL representing the object given in the parameter. here parameter is inputFile.files[0]
    const image = inputFile.files[0];
    if (image.size < 2500000) {

        UploadedImg.src = URL.createObjectURL(inputFile.files[0]);
    }
    else {
        alert("Image must be less then 2.5 MB !")
    }
})

brithness.addEventListener('change', () => {
    brithnessV = 1 + (brithness.value / 100);
    brithnessValue.value = brithness.value;
    UploadedImg.style.filter = `brightness(${1 + (brithness.value / 100)})`;
    console.log(`brightness(${1 + (brithness.value / 100)})`)
})
contrast.addEventListener('change', () => {

    contrastV = (2 * contrast.value) + 100;
    contrastValue.value = contrast.value;
    UploadedImg.style.filter = `contrast(${(2 * contrast.value) + 100}%)`;
})
saturation.addEventListener('change', () => {

    saturationV = saturation.value;
    saturationValue.value = saturation.value;
    UploadedImg.style.filter = `saturate(${saturation.value}%)`;
})
warmth.addEventListener('change', () => {

    warmthV = warmth.value;
    warmthValue.value = warmth.value;
    UploadedImg.style.filter = `sepia(${warmth.value}%)`;
})

saveBtn.addEventListener('click', () => {
    //canvas is the html tag that create graphic 
    const canvas = document.createElement("canvas");

    const ctx = canvas.getContext("2d");
    //given height and width
    canvas.width = UploadedImg.naturalWidth;
    canvas.height = UploadedImg.naturalHeight;
    // ctx.filter = `brightness(${brithnessV}) contrast(${contrastV}%) saturate(${saturationV}%) sepia(${warmthV}%)`;
    ctx.filter = `brightness(${brithnessV})`;
    ctx.filter = `contrast(${contrastV}%)`;
    ctx.filter = `saturate(${saturationV}%)`;
    ctx.filter = `sepia(${warmthV}%)`;
    ctx.drawImage(UploadedImg, 0, 0, canvas.width, canvas.height);
    const link = document.createElement("a");
    link.download = "imagetush.jpg";
    link.href = canvas.toDataURL();
    link.click();
})

resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    brithness.value = 0;
    brithnessValue.value = brithness.value;
    contrast.value = 0;
    contrastValue.value = contrast.value;
    saturation.value = 100;
    saturationValue.value = saturation.value;
    warmth.value = 100;
    warmthValue.value = warmth.value;
    UploadedImg.style.filter = `brightness(${1 + (brithness.value / 100)})`;
    UploadedImg.style.filter = `contrast(${(2 * contrast.value) + 100}%)`;
    UploadedImg.style.filter = `saturate(${saturation.value} %)`;
    UploadedImg.style.filter = `sepia(${warmth.value - 100} %)`;
})
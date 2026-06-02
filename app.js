const imageInput = document.getElementById('imageInput');
const removebtn = document.getElementById('removebtn');
const resultImage = document.getElementById('resultImage');
const downloadLink = document.getElementById('downloadLink');

removebtn.addEventListener('click', async () => {
    const file = imageInput.files[0];
     
    if (!file) {
        alert('Please select an image file first.');
        return;
    }
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch("http://localhost:8000/remove-bg", {
        method: "POST",
        body: formData
    });
     
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);

    resultImage.src = imageUrl;
    downloadLink.href = imageUrl;
    downloadLink.style.display = "inline";
});
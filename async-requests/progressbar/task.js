const form = document.getElementById('form');
const fileInput = document.getElementById('file');
const progress = document.getElementById('progress');
const sendButton = document.getElementById('send');

form.addEventListener('submit', async (event) => {
    event.preventDefault

    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file.');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                progress.value = percentComplete / 100;
            }
        });

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Upload successful:', xhr.responseText);
                alert('File uploaded successfully!');
                progress.value = 1;
            } else {
                console.error('Upload failed:', xhr.status, xhr.statusText);
                alert('File upload failed.');
                progress.value = 0;
            }
        };

        xhr.onerror = () => {
            console.error('Upload error');
            alert('File upload error.');
            progress.value = 0;
        };

        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
        xhr.send(formData);

    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during file upload.');
        progress.value = 0;
    }
});
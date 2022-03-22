(function() {
    
    var uploadArea = document.getElementById('upload-area');

    var displayUploads = function(data) {
        var uploads = document.getElementById('uploads'),
            anchor,
            i;

        for (i = 0; i < data.length; i++) {
            anchor = document.createElement('a');
            anchor.href = data[i].file;
            anchor.innerText = data[i].name;

            uploads.appendChild(anchor);
        };
    };

    var upload = function(files) {
        var formData = new FormData(),
            xhr = new XMLHttpRequest(),
            i;

        for (i = 0; i < files.length; i++) {
            formData.append('file[]', files[i]);
        }

        xhr.onload = function() {
            var data = JSON.parse(this.responseText);
            displayUploads(data);
        };

        xhr.open('post', 'upload.php');
        xhr.send(formData);
    };

    uploadArea.ondrop = function(e) {
        e.preventDefault();
        this.className = 'upload-area';
        upload(e.dataTransfer.files);
    };

    uploadArea.ondragover = function() {
        this.className = 'upload-area drag-over'
        return false;
    };

    uploadArea.ondragleave = function() {
        this.className = 'upload-area'
        return false;
    };

})();
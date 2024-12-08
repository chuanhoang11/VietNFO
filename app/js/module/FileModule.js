export default function FileModule() {
  const formJs = document.querySelector(".formJs");
  if (formJs) {
    var editor = new FroalaEditor(formJs, {
      toolbarButtons: [
        "bold",
        "italic",
        "underline",
        "fontFamily",
        "fontSize",
        "|",
        "color",
        "inlineStyle",
        "paragraphStyle",
        "|",
        "paragraphFormat",
        "align",
        "formatOL",
        "formatUL",
        "-",
        "insertLink",
        "insertImage",
        "insertVideo",
        "insertFile",
        "insertTable",
        "emoticons",
        "|",
        "clearFormatting",
        "print",
        "html",
        "fullscreen",
        "undo",
        "redo",
      ],
      placeholderText: "Write something...",
      theme: "gray",
      // pluginsEnabled: ["align", "table"],
    });
  }

  const uploadForms = document.querySelectorAll(".uploadFormJs");
  if (uploadForms) {
    uploadForms.forEach((form) => {
      const fileInput = form.querySelector(".ipUpFile");
      const dropzone = form.querySelector(".dropzoneJs");
      const imageList = form.querySelector(".imageListJs");
      const inputFileUrl = form.querySelector(".inputFileUrl");
      const btnUpfileJS = form.querySelector(".btnUpfileJS");
      const progressContainer = form.querySelector(".progress-container");
      const progressCircle = form.querySelector(".circle");
      const progressText = form.querySelector(".progress-text");
      const cancelButton = form.querySelector(".btnCalcelJs");

      let uploadInterval;
      let currentFileItem = null;
      let progress = 0;

      function updateProgress() {
        const dashArray = (progress / 100) * 100;
        progressCircle.style.strokeDasharray = `${dashArray}, 100`;
        progressText.textContent = `${Math.round(progress)}%`;
      }

      function simulateUpload(file) {
        if (currentFileItem) {
          imageList.removeChild(currentFileItem);
          currentFileItem = null;
        }
        progress = 0;
        progressContainer.classList.add("active");

        const listItem = document.createElement("li");
        const fileWrapper = document.createElement("div");
        fileWrapper.classList.add("file-wrapper");

        const fileInfo = document.createElement("div");
        fileInfo.classList.add("file-info");

        const fileName = document.createElement("span");
        const fileSize = document.createElement("span");

        const fileImg = document.createElement("span");
        fileImg.classList.add("file-img");

        const img = document.createElement("img");

        if (file instanceof File) {
          const reader = new FileReader();
          reader.onload = function (e) {
            img.src = e.target.result;
          };
          reader.readAsDataURL(file);
        } else if (file instanceof HTMLImageElement) {
          img.src = file.src;
        }
        fileName.textContent = file.name || file.src;
        fileSize.textContent = `(${(file.size / 1024).toFixed(2)} KB)`;

        const deleteButton = document.createElement("button");
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa-light", "fa-xmark");

        deleteButton.onclick = () => {
          imageList.removeChild(currentFileItem);
          currentFileItem = null;
          resetInputIfNoImages();
        };

        deleteButton.appendChild(deleteIcon);

        fileImg.appendChild(img);
        fileInfo.appendChild(fileName);
        fileInfo.appendChild(fileSize);
        fileWrapper.appendChild(fileImg);
        fileWrapper.appendChild(fileInfo);
        listItem.appendChild(fileWrapper);
        listItem.appendChild(deleteButton);

        imageList.appendChild(listItem);

        currentFileItem = listItem;

        uploadInterval = setInterval(() => {
          progress += 10;
          updateProgress();

          if (progress >= 100) {
            clearInterval(uploadInterval);

            setTimeout(() => {
              progressCircle.style.strokeDasharray = "0, 100";
              progressText.textContent = "0%";
              progressContainer.classList.remove("active");
            }, 1000);
          }
        }, 100);
      }

      function cancelUpload() {
        if (uploadInterval) {
          clearInterval(uploadInterval);
        }

        if (currentFileItem) {
          imageList.removeChild(currentFileItem);
          currentFileItem = null;
        }

        progress = 0;
        updateProgress();
        progressContainer.classList.remove("active");
        resetInputIfNoImages();
      }
      function resetInputIfNoImages() {
        if (imageList.children.length === 0) {
          fileInput.value = "";
          inputFileUrl.value = "";
        }
      }
      function handleFileSelect(event) {
        const files = event.target.files;
        if (files && files.length > 0) {
          const file = files[0];
          simulateUpload(file);
        }
      }

      function handleDrop(event) {
        event.preventDefault();
        dropzone.classList.remove("active");
        const files = event.dataTransfer.files;
        if (files && files.length > 0) {
          const file = files[0];
          simulateUpload(file);
        }
      }
      if (btnUpfileJS && cancelButton && dropzone && fileInput) {
        btnUpfileJS.addEventListener("click", () => {
          const imageUrl = inputFileUrl.value.trim();
          if (imageUrl) {
            const img = new Image();
            img.onload = () => {
              inputFileUrl.value = "";
              simulateUpload(img);
              fetch(imageUrl)
                .then((response) => response.blob())
                .then((blob) => {
                  const file = new File([blob], "image-from-url.jpg", {
                    type: blob.type,
                  });

                  const fileSize = (file.size / 1024).toFixed(2);
                  const dataTransfer = new DataTransfer();
                  dataTransfer.items.add(file);
                  fileInput.files = dataTransfer.files;

                  const fileName = file.name;
                  const fileWrapper = document.createElement("div");
                  fileWrapper.classList.add("file-wrapper");

                  const fileInfo = document.createElement("div");
                  fileInfo.classList.add("file-info");

                  const fileNameElement = document.createElement("span");
                  const fileSizeElement = document.createElement("span");

                  fileNameElement.textContent = fileName;
                  fileSizeElement.textContent = `(${fileSize} KB)`;

                  fileInfo.appendChild(fileNameElement);
                  fileInfo.appendChild(fileSizeElement);
                  fileWrapper.appendChild(fileInfo);
                })
                .catch((error) => {
                  console.error("Có lỗi xảy ra khi tải hình ảnh:", error);
                  alert("Hình ảnh không hợp lệ.");
                });
            };
            img.onerror = () => {
              alert("Hình ảnh không hợp lệ.");
            };
            img.src = imageUrl;
          }
        });

        cancelButton.addEventListener("click", cancelUpload);

        dropzone.addEventListener("dragover", (event) => {
          event.preventDefault();
        });

        dropzone.addEventListener("dragenter", (event) => {
          event.preventDefault();
          dropzone.classList.add("active");
        });

        dropzone.addEventListener("dragleave", () => {
          dropzone.classList.remove("active");
        });

        dropzone.addEventListener("drop", handleDrop);

        fileInput.addEventListener("change", handleFileSelect);
      }
    });
  }
}

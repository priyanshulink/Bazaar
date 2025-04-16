
const boxes = document.querySelectorAll('.upload-box');

  boxes.forEach((box) => {
    const input = box.querySelector('input');
    const removeBtn = box.querySelector('.remove-btn');

    input.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (event) {
          let img = box.querySelector('img');
          if (!img) {
            img = document.createElement('img');
            box.appendChild(img);
          }
          img.src = event.target.result;
          box.classList.add('has-image');
        };
        reader.readAsDataURL(file);
      }
    });

    // Remove image on button click
    removeBtn.addEventListener('click', () => {
      const img = box.querySelector('img');
      if (img) img.remove();
      input.value = '';
      box.classList.remove('has-image');
    });

    // Drag and drop events
    box.addEventListener('dragover', (e) => {
      e.preventDefault();
      box.classList.add('dragover');
    });

    box.addEventListener('dragleave', () => {
      box.classList.remove('dragover');
    });

    box.addEventListener('drop', (e) => {
      e.preventDefault();
      box.classList.remove('dragover');
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (event) {
          let img = box.querySelector('img');
          if (!img) {
            img = document.createElement('img');
            box.appendChild(img);
          }
          img.src = event.target.result;
          box.classList.add('has-image');
        };
        reader.readAsDataURL(file);
      }
    });
  });
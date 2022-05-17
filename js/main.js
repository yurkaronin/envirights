let custLabels = document.querySelectorAll('.animated-labels label');

let formInputs = document.querySelectorAll('.form-control');


for (let formInput of formInputs) {
  formInput.onfocus = function () {
    let parent = this.closest('.form-group');
    parent.querySelector('.custom-label').classList.add('active');
  }
  formInput.onblur = function () {
    let parent = this.closest('.form-group');
    parent.querySelector('.custom-label').classList.remove('active');
  }

}

// маска для поля с телефоном
Inputmask("+7 (999) 999-99-99").mask('[type="tel"]');

// Кастомный select
const elements = document.querySelectorAll('.cust-select');

if (elements) {
  let nameSelect;
  for (let i = 0, customName = 1; i < elements.length; i++) {
    elements[i].setAttribute('data-name', `select${customName}`);
    nameSelect = elements[i].getAttribute('data-name');


    const example = new Choices(`[data-name='${nameSelect}']`, {
      itemSelectText: '',
      searchEnabled: false,
      placeholder: false,
    });

    customName++;
  }
};

const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create(
  inputElement, {
    allowDrop: false,
    allowPaste: false,
    allowReplace: false,
    allowRevert: false,
    allowProcess: false,
    onupdatefiles: (files) => {
      const textAddFile = document.querySelector(".filepond--drop-label");
      if (files.length === 0) {
        textAddFile.style.display = 'block';
      } else {
        textAddFile.style.display = 'none';
      }
    },
  }
);

document.querySelector(".filepond--credits").remove();

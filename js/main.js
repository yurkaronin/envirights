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

const main_contact_form = document.querySelector('#main_contact_form');

const inputs = Array.from(main_contact_form.querySelectorAll('input'));

const extra_text_input = document.querySelector('#extra_text_input');

const alert_text = document.querySelector('.alert-text');

const submit_button = document.querySelector('#submit_button');

submit_button.addEventListener('click', (ev) => {
  ev.preventDefault();

  const form_is_valid = inputs.every((input) => input.value !== '');

  if (form_is_valid) {
    alert(
      `Yayyy! 🎊 Dear ${inputs[0].value}, your reservation for ${
        inputs[3].value
      } ${inputs[3].value > 1 ? 'people' : 'person'} has been received.`
    );
    inputs.forEach((input) => {
      input.value = '';
    });
    extra_text_input.value = '';
  } else {
    alert_text.style.display = 'block';
    setTimeout(() => {
      alert_text.style.display = 'none';
    }, 3000);
  }
});

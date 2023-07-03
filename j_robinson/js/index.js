const timeline_controls = document.querySelectorAll('.timeline__control');
const timeline__entries = document.querySelectorAll('.timeline__entry');

timeline_controls.forEach((active_control) => {
  active_control.addEventListener('click', () => {
    // Get the previous control with the active class
    let previous_active_control = Array.from(timeline_controls).filter(
      (control) => control.classList.contains('active')
    )[0];

    // Remove the active class from the previous control and add it to the new active control
    previous_active_control.classList.remove('active');
    active_control.classList.add('active');

    let new_active_control_ID = active_control.id;
    let stripped_ID = new_active_control_ID.split('-')[0];

    let previous_active_entry = Array.from(timeline__entries).filter((entry) =>
      entry.classList.contains('active')
    )[0];
    let new_active_timeline_entry = Array.from(timeline__entries).filter(
      (control) => control.id === `${stripped_ID}-timeline__entry`
    )[0];

    previous_active_entry.classList.remove('active');
    new_active_timeline_entry.classList.add('active');
  });
});

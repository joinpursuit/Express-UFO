const redirect = (e) => {
  console.log('help');
  e.preventDefault();
  let sights = document.querySelectorAll('.sight-query');
  sights = Array.prototype.slice.call(sights).map((el) => el.value);
  const [state, city, shape] = sights;

  window.location.href = `http://localhost:3333/api/v1/sightings?state=${state}&city=${city}&shape=${shape}`;
};

const submit = document.querySelector('#submit');
submit.addEventListener('click', redirect);

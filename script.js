document.querySelector('button').addEventListener('click', function () {
  let day = document.querySelector('.day').value
  let age = document.querySelector('.age').value
  age = parseInt(age)
  if ((day === 'wednesday' || day === 'thursday' || day === 'friday' || day === 'tuesday' || day === 'monday') && age < 18) {
    alert('time for school')
  } else if (day === 'wednesday' && age >= 18) {
    alert('time to go to work')
  } else {
    alert('rest')
  }
})

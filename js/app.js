window.addEventListener('load', function() {
  var buton = document.getElementById('btn');
  var newbuton = document.getElementById('caja-js');
  var butonTwo = document.getElementById('btn-two');
  var ancor = document.getElementById('btn-tree');
  var secondArti = document.getElementById('second-section-js');
  var butonFour = document.getElementById('btn-four');


  buton.addEventListener('click', function() {
    buton.style.visibility = 'hidden';
    newbuton.style.visibility = 'visible';
  });

  butonTwo.addEventListener('click', function(e) {
    var dadOne = document.getElementById('tarjeta-js');
    var dad = document.getElementById('caja-js2');
    var parr = document.createElement('p');
    var refNodo = dadOne.firstChild;
    var text = document.getElementById('inputText').value;
    if (text.length <= 0) {
      e.preventDefault();
    } else {
      parr.textContent = text;
      parr.classList.add('negrita');
      dadOne.insertBefore(parr, refNodo);
      dadOne.style.visibility = 'visible';
      newbuton.style.visibility = 'hidden';
      secondArti.style.visibility = 'visible';
    }

    ancor.addEventListener('click', function() {
      document.getElementById('tarjeta-js').style.visibility = 'hidden';
      document.getElementById('caja-js2').style.visibility = 'visible';
      var newTitle = document.createElement('p');
      var dad = document.getElementById('caja-js2');
      var child = document.getElementById('textarea-id');
      newTitle.textContent = document.getElementById('inputText').value;
      newTitle.classList.add('estyleP');
      dad.insertBefore(newTitle, child);
    });

    butonFour.addEventListener('click', function(event) {
      var tajetText = document.createElement('p');
      var dad = document.getElementById('caja-js2');
      var child = document.getElementById('textarea-id');
      if (child.value.length <= 0) {
        event.preventDefault();
      } else {
        tajetText.textContent = child.value;
        tajetText.classList.add('estyleT');
        dad.insertBefore(tajetText, child);
        child.value = '';
      }
    });
  });
});
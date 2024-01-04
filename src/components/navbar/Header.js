document.addEventListener('DOMContentLoaded', () => {
  let MenuNavBar = document.getElementById('MenuNavBar');
  let barsIcon = document.getElementById('barsIcon');
  let Xicon = document.getElementById('Xicon');
  let menuMobile = document.getElementById('menuMobile');

  // Inicialmente, mostramos el icono de barras y ocultamos el icono X
  barsIcon.style.display = 'block';
  Xicon.style.display = 'none';

  MenuNavBar.addEventListener('click', e => {
    // Si el icono de barras está visible, lo ocultamos y mostramos el icono X
    if (barsIcon.style.display === 'block') {
      barsIcon.style.display = 'none';
      Xicon.style.display = 'block';
      menuMobile.style.visibility = 'visible';
      menuMobile.style.transform = 'translateY(-20px)';
    }
    // Si el icono X está visible, lo ocultamos y mostramos el icono de barras
    else if (Xicon.style.display === 'block') {
      Xicon.style.display = 'none';
      barsIcon.style.display = 'block';
      menuMobile.style.visibility = 'hidden';
      menuMobile.style.transform = 'translateY(-85px)';
    }
  });
});
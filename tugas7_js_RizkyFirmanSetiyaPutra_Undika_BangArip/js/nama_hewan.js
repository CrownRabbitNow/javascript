$(document).ready(function () {
  $('.card-body').each(function () {
    $(this).click(function () {
      let hewan = $(this).find('h5').attr('id');
      $('#suara').remove();
      $('#foto').remove();
      if (hewan == 'ayam') {
        $(this).prepend(`<img id="foto" src="img/ayam.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/ayam.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'bebek') {
        $(this).prepend(`<img id="foto" src="img/bebek.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/bebek.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'angsa') {
        $(this).prepend(`<img id="foto" src="img/angsa.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/angsa.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'beo') {
        $(this).prepend(`<img id="foto" src="img/beo.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/beo.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'merpati') {
        $(this).prepend(`<img id="foto" src="img/merpati.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/merpati.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'sapi') {
        $(this).prepend(`<img id="foto" src="img/sapi.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/sapi.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'kuda') {
        $(this).prepend(`<img id="foto" src="img/kuda.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/kuda.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'domba') {
        $(this).prepend(`<img id="foto" src="img/domba.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/domba.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'unta') {
        $(this).prepend(`<img id="foto" src="img/unta.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/unta.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'jerapah') {
        $(this).prepend(`<img id="foto" src="img/jerapah.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/jerapah.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'kudanil') {
        $(this).prepend(`<img id="foto" src="img/kudanil.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/kudanil.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'gajah') {
        $(this).prepend(`<img id="foto" src="img/gajah.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/gajah.mp3" autoplay id="suara"></audio>`);
      } else if (hewan == 'harimau') {
        $(this).prepend(`<img id="foto" src="img/harimau.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/harimau.mp3" autoplay id="suara"></audio>`);
      } else {
        $(this).prepend(`<img id="foto" src="img/serigala.png" class="card-img-top">`);
        $(this).find('.audio').append(`<audio src="audio/serigala.mp3" autoplay id="suara"></audio>`);
      }
    });
  });
});

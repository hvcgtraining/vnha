"use strict";

var btnShow = document.getElementById('btn-show');
var formShow = document.getElementById('form-show');
var btnHide = document.getElementById('hide-form');
btnShow.addEventListener('click', function () {
  formShow.classList.add('hide');
});
btnHide.addEventListener('click', function () {
  formShow.classList.remove('hide');
});
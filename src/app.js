import rivraddon from './rivraddon'

// Self invoking function to attach rivraddon object to Window.
(function addon(){
  window.rivraddon = rivraddon;
})();

(function() {
  function strikethrough(){
    document.body.innerHTML = document.body.innerHTML.replace(
      /\~\~(.+?)\~\~/gim,
      '<del>$1</del>'
    );
  }
  strikethrough();
})();

//http://stackoverflow.com/questions/17004095/jekyll-markdown-strikethrough

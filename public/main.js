var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        //it goes by odd numbers in the DOM
        //inner Text would mean getting the text that is inside the li
        //how to bind an event listener to an element
        const quote = this.parentNode.parentNode.childNodes[1].innerText
        const char = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('quotes', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'quote': quote,
            'char': char,
            'thumbUp':thumbUp,

          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        //it goes by odd numbers in the DOM
        //inner Text would mean getting the text that is inside the li
        //how to bind an event listener to an element
        const quote = this.parentNode.parentNode.childNodes[1].innerText
        const char = this.parentNode.parentNode.childNodes[3].innerText
        const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[7].innerText)

        fetch('quotesto', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'quote': quote,
            'char': char,

            'thumbDown':thumbDown
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
            window.location.reload(true)
        })
      });
});
//appending a event listener to every single trash can
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const quote = this.parentNode.parentNode.childNodes[1].innerText
        const char = this.parentNode.parentNode.childNodes[3].innerText
        fetch('quotes', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'quote': quote,
            'char': char
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

var imgs = ['blackpanther.jpg', 'killmonger.jpg', 'shurinakia.jpg', 'strong.jpg' ]
var index = 0;

document.getElementById('picArea').onclick=nextImg

function nextImg(){
  index++;
  if( index >imgs.length-1){
  index =0;
  }
  document.querySelector('img').setAttribute('src', imgs[index]);
  }

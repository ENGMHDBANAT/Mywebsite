/*Contact me form google-sheet-submit*/ 
$(document).ready(function(){
    $('.btn').click(function(){
      $('.menu').toggleClass('active');
    });
  })
  /*google sheet script */
  const scriptURL ='https://script.google.com/macros/s/AKfycbyoT-brV3MIjcGB0yf6X_ob-YLxdSuxrvpX0d9YfXCKyPGbL8Pe2hP0nwHhOvkqjG4/exec'
  const form = document.forms['submit-to-google-sheet']
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
  /*Read More */ 
 /* const parentcontainer=document.querySelector('read-more')
  parentcontainer.addEventListener('click',event=>{
    const current =event.target;
    const IsReadMoreBtn=current.ClassName.includes('read-more-btn');
    if(!IsReadMoreBtn)return;
    const currentText=Event.target.parentNode.querySelector('read-more-text');
    currentText.classList.toggle('read-more-text--show');
    current.textcontent=current.textcontent.includes('Read More')?"Read less...":"Read More...";

  })*/
 /* document.getElementById('span').addEventListener('click',function(){
    document.getElementById('read-more-text').classList.toggle('active')
  })*/
  /*$(document).ready(function(){
    $("#invisible-text").hide();
    $(document).on('click',"#btn",function(){
      var morelessbutton=$("#invisible-text").is(":visible")?'Developers number':'Read Less';
      $(this).text(morelessbutton);
      $(this).parent('.read-more').find("#invisible-text").toggle();
      $(this).parent('.read-more').find(".visible-text").toggle();
    });
  });*/
  function readMore() {
    var text = document.getElementById("text"); 
    var btnText = document.getElementById("readMoreBtn");
    if (text.style.display === "none") {
      text.style.display = "inline";
      btnText.innerHTML = "Done";
    } else {
      text.style.display = "none";
      btnText.innerHTML = "Developers number";
    }
  }
  
  function readLess() {
    var text = document.getElementById("text");
    var btnText = document.getElementById("readMoreBtn");
  
    if (text.style.display === "none") {
      text.style.display = "inline";
      btnText.innerHTML = "Done";
    } else {
      text.style.display = "none";
      btnText.innerHTML = "Developers number";
    }
  }
  
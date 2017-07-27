//Selecting the Necessary DOM elements
const textFieldOne = document.querySelector("#name");
const JobRole = document.querySelector("select#title");
const FieldSet1 = document.querySelector("#fieldset1");
const designTheme = document.querySelector("#design");
const activities = document.querySelector(".activities");
const span = document.createElement('span');
const payment = document.querySelector("#payment");
// Jquery Object
const br = $('#tempbr');
const input = $('#tempid');
const color = $("#color");
const jsPuns = $(".jspuns");
const jsOnly = $(".jsonly");
const nineTo12 = $(".9to12t");
const oneTo4 = $(".1to4t");
const creditcard = $("#credit-card");
const bitcoin = $("#bitcoin");
const paypal = $("#paypal");
const email = $("#mail");
const name = $("#name");
const div = document.createElement('div');
// const activities = $(".activities");
function scrolltop(){
  $('html, body').animate({ scrollTop: 0 }, 'fast');
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function hideInputElement(){
  br.hide();
  input.hide();
}

function showInputElement(){
  br.show();
  input.show();
}

function add(number){
  adder +=number;
  selectSpan.html('Total: $'+adder);
  selectSpan.show();
}

function remove(number){
  adder -=number;
  selectSpan.html('Total: $'+adder);
  if(adder==0){
        selectSpan.hide();
      }
  else{
        selectSpan.show();
      }
}

function hideAndShow(v1,v2,v3){
    v1.show();
    v2.hide();
    v3.hide();
}
//task1

textFieldOne.focus();

//task2
hideInputElement();
JobRole.addEventListener('change',(e)=>{
  if(e.target.value==="other"){
      showInputElement();
    }
  else{
    if(document.querySelector("#tempbr")){
      hideInputElement();
    }
  }
});

//task3 Used Jquery for its hide and show methods
color.hide();
$("#hidethis").hide();
designTheme.addEventListener('change',(e)=>{
  if(e.target.value==="js puns"){
      $("#hidethis").show();
      color.show();
      color.val("cornflowerblue");
      jsOnly.hide();
      jsPuns.show();
    }
  else if (e.target.value==="heart js") {
      $("#hidethis").show();
      color.show();
      color.val("tomato")
      jsOnly.show();
      jsPuns.hide();

    }
  else{
    $("#hidethis").hide();
    color.hide();
  }
});

//task4
// Adding a temporary Span element to show the Total
let adder=0;
activities.appendChild(span);
span.id = "tempspan"
const selectSpan = $('#tempspan');
selectSpan.hide();

activities.addEventListener('change',(e)=>{   // Event listener on activities to calculate total cost
    if(e.target.name=="all"){
      if(e.target.checked){
        add(200);
      }
      else{
        remove(200);
      }
    }
    else if (e.target.name=="js-frameworks" || e.target.name=="express"){
      if(e.target.checked)
      {
      add(100);
        for(let i=0;i<nineTo12.length;i+=1){
          if(e.target !== nineTo12[i])
          {
          nineTo12[i].disabled = true;
          nineTo12[i].style.color = "grey"
          }
          e.target.nextElementSibling.style.color = ""
        }

      }
      else{
        for(let i=0;i<nineTo12.length;i+=1)
        {
          nineTo12[i].disabled = false;
          nineTo12[i].style.color = "";
        }
        remove(100);
      }
    }
    else if(e.target.name=="js-libs" || e.target.name=="node"){
      if(e.target.checked)
      {
      add(100);
        for(let i=0;i<oneTo4.length;i+=1){
          if(e.target !== oneTo4[i]){
          oneTo4[i].disabled = true;
          oneTo4[i].style.color = "grey";
          }
          e.target.nextElementSibling.style.color = ""
        }

      }
      else{
        for(let i=0;i<oneTo4.length;i+=1)
        {
          oneTo4[i].disabled = false;
          oneTo4[i].style.color = "";

        }
        remove(100);
        }
      }
    else {
      if(e.target.checked){
        add(100);
      }
      else{
        remove(100);
      }
    }
});


//task5 Hiding & showing the required Div elements according to the selected payment process
creditcard.hide();
bitcoin.hide();
paypal.hide();
payment.addEventListener('change',(e)=>{
  if(e.target.value=="credit card"){
    hideAndShow(creditcard,bitcoin,paypal);
  }
  else if (e.target.value=="paypal") {
    hideAndShow(paypal,creditcard,bitcoin);
  }
  else if (e.target.value=="bitcoin"){
    hideAndShow(bitcoin,creditcard,paypal);
  }
  else{
    creditcard.hide();
    bitcoin.hide();
    paypal.hide();
  }
});


//task6 Form validation !!
const ccnumber = $("#cc-num");
const zip=$("#zip");
const cvv = $("#cvv");

$('#myForm').submit(function(e) {    //Submit Event Handler on the FORM!
  $('#errors').remove();
let errors = "<div id='errors'>";

if(name.val()===""){
  console.log("NO NAME");
  errors += `<div style="color:red">Name is required</div>`;
  e.preventDefault();
  scrolltop();
}

if(!validateEmail(email.val())){
  errors += `<div style="color:red">Please Enter an acceptable email id</div>`;
  e.preventDefault();
  scrolltop();
}

if(adder==0){
  errors += `<div style="color:red">Please Register for atleast 1 activity</div>`;
  e.preventDefault();
  scrolltop();
}

if(payment.value=="select_method"){
  errors += `<div style="color:red">Please Select a Payment method</div>`;
  e.preventDefault();
  scrolltop();
}
if(adder!=0)
  {
    if(payment.value=="credit card"){
       if(isNaN(ccnumber.val()) || ccnumber.val()==""){                // If CC is not a number
         errors += `<div style="color:red">Credit Card is not a number</div>`;
         e.preventDefault();
         scrolltop();
        }
       if(isNaN(zip.val())) {       // IF Zip code is not a number
         errors += `<div style="color:red">Zip Code is not a number</div>`;
         e.preventDefault();
         scrolltop();
        }
       if(isNaN(cvv.val())) {        // If CVV is not a number
         errors += `<div style="color:red">CVV is not a number</div>`;
         e.preventDefault();
         scrolltop();
        }
        if(!(((ccnumber.val().length < 17))&&(ccnumber.val().length>12))){     // cc number is not of appropriate length
          errors += `<div style="color:red">CVV number should be of length 13-16</div>`;
          e.preventDefault();
          scrolltop();
        }
        if(!(zip.val().length==5)){                  //zip is not of appropriate length
          errors += `<div style="color:red">ZIP Code should be 5 digits long</div>`;
          e.preventDefault();
          scrolltop();
         }
         if(!(cvv.val().length==3)){
           errors += `<div style="color:red">CVV should be 3 digits long</div>`;
           e.preventDefault();
           scrolltop();
         }
      }
    }
errors += '</div>';
$(errors).insertBefore('fieldset:first');

if (errors == "<div id='errors'></div>"){   //If there are no errors in the form
    this.submit();
    document.write("<h1> YOUR FORM IS SUBMITTED!!");
      // If all the validations succeeded
}

});

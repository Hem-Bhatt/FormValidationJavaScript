
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

// const activities = $(".activities");


function hideInputElement()
{
  br.hide();
  input.hide();
}

function showInputElement()
{
  br.show();
  input.show();
}

function add(number)
{
  adder +=number;
  selectSpan.html('Total: $'+adder);
  selectSpan.show();
}

function remove(number)
{
  adder -=number;
  selectSpan.html('Total: $'+adder);
  if(adder==0)
      {
        selectSpan.hide();
      }
  else
      {
        selectSpan.show();
      }
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
//selecting all the classes for activities



activities.addEventListener('change',(e)=>{
    if(e.target.name=="all")
    {
      if(e.target.checked)
      {
        add(200);
      }
      else
      {
        remove(200);
      }
    }
    else if (e.target.name=="js-frameworks" || e.target.name=="express")
    {
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
          if(e.target !== oneTo4[i])
          {
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
      if(e.target.checked)
      {
        add(100);
      }
      else
      {
        remove(100);
      }
    }
});


//task5
creditcard.hide();
bitcoin.hide();
paypal.hide();
payment.addEventListener('change',(e)=>{
  if(e.target.value=="credit card"){
    creditcard.show();
    bitcoin.hide();
    paypal.hide();
  }
  else if (e.target.value=="paypal") {
    creditcard.hide();
    bitcoin.hide();
    paypal.show();
  }
  else if (e.target.value=="bitcoin"){
    creditcard.hide();
    bitcoin.show();
    paypal.hide();
  }
  else{
    creditcard.hide();
    bitcoin.hide();
    paypal.hide();
  }
});


//task6
const ccnumber = $("#cc-num");
const zip=$("#zip");
const cvv = $("#cvv");
$('#myForm').submit(function(e) {
     // to stop the form from submitting
     if(adder==0)
     {
       alert("Please Register for atleast one activity!!!!");
       e.preventDefault();
     }
    if(payment.value=="select_method")
    {
      alert("Please Select a Payment Method!!");
      e.preventDefault();
    }

    else if(adder!=0)
    {
      if(payment.value=="credit card"){
      if(!((isNaN(ccnumber.val())) && isNaN(zip.val()) && isNaN(cvv.val())))
      {
        if((12 < ccnumber.val().length <17)&&(zip.val().length==5)&&(cvv.val().length==3))
        {
            this.submit();
        }
            else{

          alert("Please Enter a 13 to 16-digit credit card number, a 5-digit zip code, and 3-number CVV value");
          e.preventDefault();
        }
      }
      else {
          alert("Please Enter Numerical Data for the Field!")
          e.preventDefault();
      }
    }
        else{
          this.submit();

    }
  }

      // If all the validations succeeded
});


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


//task6

const ccnumber = $("#cc-num");
const zip=$("#zip");
const cvv = $("#cvv");
$('#myForm').submit(function(e) {    //Submit Event Handler on the FORM!

     if(adder==0)
     {
       alert("Please Register for atleast one activity!!!!");
       const legend = document.querySelector("#legend1");
       legend.style.color = "red"
       legend.focus();
       e.preventDefault();
     }
    if(payment.value=="select_method")
    {
      alert("Please Select a Payment Method!!");
      payment.focus();
      e.preventDefault();
    }

    else if(adder!=0)
    {
      if(payment.value=="credit card"){
        if(isNaN(ccnumber.val())){                // If CC is not a number
            alert("CC is not a number")
            ccnumber.focus();
            e.preventDefault();
          }
        else if (isNaN(zip.val())) {       // IF Zip code is not a number
          alert("ZIP is not a number")
          zip.focus();
          e.preventDefault();
        }
        else if (isNaN(cvv.val())) {        // If CVV is not a number
          alert("CVV is not a number");
          cvv.focus();
          e.preventDefault();
        }
        else   // If all are numbers
          {
              if(!(((ccnumber.val().length < 17))&&(ccnumber.val().length>12))){     // cc number is not of appropriate length
                alert("CC number should have length of 13-16");
                ccnumber.focus();
                e.preventDefault();
              }
              else if(!(zip.val().length==5)){                  //zip is not of appropriate length
                alert("Zip number should be of length 5")
                zip.focus();
                e.preventDefault();
              }
              else if(!(cvv.val().length==3)){
                alert("CC number should be of length 3")                // cvv is not of appropriate length
                cvv.focus();
                e.preventDefault();
              }
              else
              {
                  this.submit();
                  document.write("<h1> YOUR FORM IS SUBMITTED!!");
                  }

            }

    }
        else{
          this.submit();
          document.write("<h1> YOUR FORM IS SUBMITTED!!"); 
          // If all the validations succeeded
    }
  }

      
});

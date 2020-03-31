let sendButton = document.querySelector('button');

function send() {
  let name = document.querySelector('#form_field_1Value').value;
  let phone = document.querySelector('#form_field_2Value').value;
  let demand = document.querySelector('#form_field_3Value').value;
  let demand = document.querySelector('#form_field_4Value').value;
  let demand = document.querySelector('#form_field_5Value').value;
  let demand = document.querySelector('#form_field_6Value').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycby19TAEMJSkwFIb6Ka-O5gYo-en446w1BL5N9oJo59ON0-oemU/exec",
    data: {
        "form_field_1": form_field_1,
        "form_field_2": form_field_2,
        "form_field_3": form_field_3,
        "form_field_4": form_field_4,
        "form_field_5": form_field_5,
        "form_field_6": form_field_6
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });
};

sendButton.addEventListener('click', send);
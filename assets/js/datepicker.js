// Date of Assignment
const dateAssignment = new Datepicker(
  document.getElementById("dateAssignment"),
  {
    autohide: true,
    format: "mm/dd/yyyy",
  }
);

document.getElementById("icon-dateAssignment").onclick = () => {
  document.getElementById("dateAssignment").focus();
};

// Date of Loss
const dateLoss = new Datepicker(document.getElementById("dateLoss"), {
  autohide: true,
  format: "mm/dd/yyyy",
});

document.getElementById("icon-dateLoss").onclick = () => {
  document.getElementById("dateLoss").focus();
};

// ---- SINGLE (no icon) ----
function singleDatepicker(inputId) {
  const inputEl = document.getElementById(inputId);
  if (!inputEl) return;

  return new Datepicker(inputEl, {
    autohide: true,
    format: "mm/dd/yyyy",
  });
}

// ---- MULTIPLE (with icon) ----
function multiDatepicker(inputId, iconId) {
  const inputEl = document.getElementById(inputId);
  const iconEl = document.getElementById(iconId);

  if (!inputEl) return;

  const picker = new Datepicker(inputEl, {
    autohide: true,
    format: "mm/dd/yyyy",
  });

  if (iconEl) {
    iconEl.onclick = () => inputEl.focus();
  }

  return picker;
}

// ---- INITIALIZE ALL ----
const dateAssignment = multiDatepicker("dateAssignment", "icon-dateAssignment");
const dateLoss = multiDatepicker("dateLoss", "icon-dateLoss");
const filter1 = multiDatepicker("filterDate1", "filtericon1");
const filter2 = multiDatepicker("filterDate2", "filtericon2");

// Single Inputs
// const filter1 = singleDatepicker("filterDate1");
// const filter2 = singleDatepicker("filterDate2");

javascript: (function () {

  let CRNs = [22180, 24135];
  const CRNInputs = document.querySelectorAll('input[type="number"]');

  for (let i = 0; i < CRNs.length; i++) {
    CRNInputs[i].value = CRNs[i];
    CRNInputs[i].dispatchEvent(new Event('input', { bubbles: true }));
  }

  setTimeout(() => {
    let okButton = document.querySelector('button[type="submit"]');
    okButton.click();
  }, 50);

  setTimeout(() => {
    let doneButton = document.querySelectorAll('button.btn-success')[1];
    doneButton.click();
  }, 150);

  void 0;

  setInterval(() => {
    let CRNs = [22180, 24135];
    const CRNInputs = document.querySelectorAll('input[type="number"]');

    for (let i = 0; i < CRNs.length; i++) {
      CRNInputs[i].value = CRNs[i];
      CRNInputs[i].dispatchEvent(new Event('input', { bubbles: true }));
    }

    setTimeout(() => {
      let okButton = document.querySelector('button[type="submit"]');
      okButton.click();
    }, 50);

    setTimeout(() => {
      let doneButton = document.querySelectorAll('button.btn-success')[1];
      doneButton.click();
    }, 150);

    void 0;
  }, 1500);
})();

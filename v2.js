javascript: (() => {
  const pickCRNs = () => {
    const CRNs = [];
    const CRNInputs = document.querySelectorAll('input[type="number"]');

    for (let i = 0; i < CRNs.length; i++) {
      CRNInputs[i].value = CRNs[i];
      CRNInputs[i].dispatchEvent(new Event('input', { bubbles: true }));
    }

    setTimeout(() => {
      const okButton = document.querySelector('button[type="submit"]');
      okButton.click();
    }, 50);

    setTimeout(() => {
      const doneButton = document.querySelectorAll('button.btn-success')[1];
      doneButton.click();
    }, 150);
  };

  pickCRNs();

  setInterval(() => {
    pickCRNs();
  }, 1500);
})();

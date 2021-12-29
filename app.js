// getting id's
const regContainer = document.getElementById("regContainer");
const regTitle = document.getElementById("regTitle");
const checkRegForm = document.getElementById("checkRegForm");
const patientContainer = document.getElementById("patientContainer");
const checkPatient = document.getElementById("checkPatient");
const titlePatient = document.getElementById("titlePatient");

// // listeners
if (checkRegForm) {
  checkRegForm.addEventListener("click", (e) => {
    e.preventDefault();
    regTitle.remove();
    regContainer.innerHTML = `
      <p class="m-auto2 t-center bg-blue blue p-10 width-85 radius-5 font-20">আপনার রেজিস্ট্রেশন সফল হয়েছে!<br>Registration id:123456789</p>
      `;
  });
}

if (checkPatient) {
  checkPatient.addEventListener("click", (e) => {
    e.preventDefault();
    titlePatient.innerText = "রোগীর তথ্য";
    patientContainer.innerHTML = `
    <div class="width-90 shadow m-auto2 p-5">
    <h4 class="gray">রোগীর নামঃ <span class="red">অনিন্দ্য বর্মণ</span></h4>
    <h4 class="gray">আইডি নাম্বারঃ <span class="red">১২৩৪৫৬৭৮৯</span></h4>
    <h4 class="gray">বয়সঃ <span class="red">১৭</span></h4>
    <h4 class="gray">উচ্চতাঃ <span class="red">৫ ফুট ৪ ইঞ্চি</span></h4>
    <h4 class="gray">ঠিকানাঃ <span class="red">কসবা, সদর, দিনাজপুর</span></h4>
    <h4 class="gray">যোগাযোগের নাম্বারঃ <span class="red">০১৭########</span></h4>
    <h4 class="gray">ব্লাড প্রেসারঃ <span class="red">১২০/৮০</span></h4>
    <h4 class="gray">পালস রেটঃ <span class="red">৭৫/s.</span></h4>
    <h4 class="gray">অক্সিজেন লেভেলঃ <span class="red">৯০-১০০</span></h4>
    </div>
        `;
  });
}

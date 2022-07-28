const range = document.getElementById("range");
const range_percent = document.querySelector(".slider .percent h2");
const filter_title = document.querySelector(".slider .titles h2");
const filter_buttons = document.querySelectorAll(".bttns button");
const rotate_buttons = document.querySelectorAll(".functions button");
const save_image = document.getElementById("save-image");

range.addEventListener("input", () => {
  range_percent.innerHTML = `${range.value}%`;
});

filter_buttons.forEach((bttn) => {
  bttn.addEventListener("click", () => {
    document.querySelector(".bttns .actived").classList.remove("actived");
    bttn.classList.add("actived");

    filter_title.innerHTML = bttn.innerHTML;
  });
});

const choose_img_btn = document.getElementById("choose-image");
const input_file = document.getElementById("file-input");
const img_preview = document.querySelector(".preview-img");

const load_image = () => {
  let img = input_file.files[0];
  if (!img) return;

  img_preview.src = URL.createObjectURL(img);
  check_status(img);
};

input_file.addEventListener("change", load_image);
choose_img_btn.addEventListener("click", () => input_file.click());

const check_status = (item) => {
  if (item !== null) {
    filter_buttons.forEach((bttn) => {
      bttn.removeAttribute("disabled");
      range.removeAttribute("disabled");
      document.querySelector(".filters").classList.remove("disabled");
    });

    rotate_buttons.forEach((bttn) => {
      bttn.removeAttribute("disabled");
      save_image.removeAttribute("disabled");
    });
  }
};

// edit the image

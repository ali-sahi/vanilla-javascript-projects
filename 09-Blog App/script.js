const filterBtns = document.querySelector(".btn-container");
const postContainer = document.querySelector(".posts-container");
const modalPopup = document.querySelector(".modal-popup");

//on page load

async function getPosts() {
  try {
    let result = await fetch("data.json");
    let data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

function showFilterBtns(posts) {
  // First of all we will get the categories from the posts.

  const categories = posts.reduce(
    function (values, items) {
      if (!values.includes(items.category)) {
        values.push(items.category);
      }
      return values;
    },
    ["all"]
  );

  // After that the categories are used to create html buttns dynamically.

  const allBtns = categories
    .map(function (item) {
      return `<button class="filter-btn" type="button" data-id="${item}">${toCaptialize(item)}</button>`;
    })
    .join("");

  filterBtns.innerHTML = allBtns;

  // Now we will get all the buttons that are dynamically created.

  const getBtns = document.querySelectorAll(".filter-btn");

  getBtns.forEach(function (btn) {
    document.querySelector('[data-id="all"]').classList.add("btn-active");

    btn.addEventListener("click", function (e) {
      const currentBtn = e.currentTarget.dataset.id;
      if (document.querySelector(".btn-active")) {
        document.querySelector(".btn-active").classList.remove("btn-active");
      }
      e.currentTarget.classList.add("btn-active");
      const postData = posts.filter(function (item) {
        if (currentBtn === item.category) {
          return item;
        }
      });

      if (currentBtn === "all") {
        showPosts(posts);
        readMoreButton();
      } else {
        showPosts(postData);
        readMoreButton();
      }
    }); //btn event listner end
  });
}

// Utility Functions.

function toCaptialize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function showPosts(allposts) {
  const totalPosts = allposts
    .map(function (postItem) {
      return `<div class="post">
        <div class="thumbnail-container">
            <img src="${postItem.image}" class="thumbnail-img" alt="">
        </div>
        <div class="meta">
            <h4>${toCaptialize(postItem.category)}</h4>
            <h5>${postItem.author}</h5>
        </div>
        <div class="content">
            <h2>${postItem.title}</h2>
        <p>${postItem.description}</p>
        </div>
        <div class="read-more-btn">
            <button class="read-btn" data-id="${
              postItem.id
            }" onclick="showPopup(${postItem.id})">Read More</button>
        </div>
    </div>
`;
    })
    .join("");

  postContainer.innerHTML = totalPosts;
}

function showPopup(id) {
  modalPopup.classList.remove("hide");
  getPosts().then((posts) => {
    const postItem = posts.filter((post) => post.id == id)[0];
    console.log(postItem);

    return (modalPopup.innerHTML = `
                          <div class="popup-overlay">
                  <div class="popup">
                  <button class="close-modal" onclick="closePopup()">x</button>
                  <div class="full-post">
                  <div>
                      <img src="${postItem.image}" class="full-img" alt="">
                  </div>
                  <div class="meta">
                      <h4>${postItem.category}</h4>
                      <h5>${postItem.author}</h5>
                  </div>
                  <div >
                      <h2>${postItem.title}</h2>
                  <p>${postItem.content}</p>
                  </div>
                  
              </div>`);
  });
}
function closePopup() {
  modalPopup.classList.add("hide");
}

window.addEventListener("DOMContentLoaded", function () {
  getPosts().then((products) => {
    showFilterBtns(products);
    showPosts(products);
    // readMoreButton(products);
  });
});

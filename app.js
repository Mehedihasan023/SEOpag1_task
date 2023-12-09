// function to fetch data 
const fetchData =(url,postName)=>{
    fetch(url)
        .then(Response => Response.json())
        .then(data => displaySearchResult(data,postName))

}
// display data information
const displaySearchResult = (data,postName) => {

    data.forEach(element => {

        //show the number of posts or number of single element in this parent div
        document.getElementById('numOf'+postName).innerText=(data.length);

        // select parent div by id
        const multiplePosts = document.getElementById(postName);
            // create div for single card 
            const div = document.createElement('div');
            div.innerHTML = `
       <div class="card h-100 mb-3">
                       
                         <div class="d-flex justify-content-between p-1">
                            <span class="d-flex"> <img src="${element.prfl_pic}" class="card-img-top prfl-img rounded-circle" >
                            <p class="m-2 fw-semibold text-body-secondary">Client Name</p></span>

                            <span class="d-flex">
                            <img src="${element.client_pic}" class="card-img-top prfl-img rounded-circle" >
                            <p class="m-2 fw-semibold text-body-secondary">${element.client_name}</p>
                            </span>
                         </div>

                       
                        <div class="d-flex justify-content-between p-1">
                            <p class="text-secondary"><i class="fa-solid fa-layer-group"></i> ${element.description.slice(1, 30)}...</p>
                            <p class="bg-light p-1 rounded"><i class="fa-solid fa-clipboard-list"></i> 1/2</p>
                        </div>
                        <div  class="d-flex justify-content-between p-1 ">
                            <img src="${element.viewers_pic_1}" class=" prfl-img rounded-circle" >
                            <img src="${element.viewers_pic_2}" class=" prfl-img rounded-circle" >
                            <p class="bg-light rounded-circle p-2">12+</p>
                            
                            <p class="bg-light rounded-pill p-2"><i class="fa-regular fa-comments"></i> 15</p>
                            <button class="btn" onclick="openModal()"data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            <p> <i class="fa-solid fa-paperclip"></i> 25</p>
                            </button>
                            
                            <p class="mt-2"><i class="fa-regular fa-calendar-days"></i> ${element.date}</p>
                        </div>

                    </div>
       
            `;
            // append the card to div 
            multiplePosts.appendChild(div);
    });

}

// open modal to upload files
const openModal = () => {
    const showModal = document.getElementById('show-modal');
    showModal.innerHTML = ``;
    // modal content
    const div = document.createElement('div');
    div.innerHTML = `
 
      <div class="modal-content">
        <div class="modal-header border-0">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
        </div>
        <div class="modal-body">
      
         <input type="file" id="fileInput" multiple>

         <h4> List of uploaded files: <span id='list-count'></span></h4>

         <div id="fileList"></div>
       
        </div>
  </div>
    `;

    showModal.appendChild(div);

    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    const orderedList = document.createElement('ol');

    // Event listener for file input change
    fileInput.addEventListener('change', function (event) {

        const files = event.target.files; // Get uploaded files

        // Loop through each uploaded file
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileName = file.name; // Get file name
            const fileExtension = fileName.split('.').pop(); // Get file extension

            // Create a list item (li) for each file with its name and extension
            const listItem = document.createElement('li');
            listItem.textContent = `${fileName} (${fileExtension})`;

            // Append the list item to the ordered list
            orderedList.appendChild(listItem);
            fileList.appendChild(orderedList);
        }

        // show the number of uploaded files
        const listCount = fileList.querySelectorAll('li');
        document.getElementById('list-count').innerText = (listCount.length);

    });
}
// call fetchdata function for differnt post and data
fetchData('data1.json', 'post1');
fetchData('data2.json', 'post2');
fetchData('data3.json', 'post3');
fetchData('data4.json', 'post4');
fetchData('data5.json', 'post5');
fetchData('data6.json', 'post6');

let myprojects = []
function addMyProject(event) {
    event.preventDefault()

    let projectName = document.getElementById('project-name').value
    let description = document.getElementById('description').value
    let image = document.getElementById('input-myproject')
    let waktuAwal = document.getElementById('start-date').value
    let waktuAkhir =document.getElementById('end-date').value

    let date1 = new Date(waktuAwal)
    let date2 = new Date(waktuAkhir)

    let distance1 = date2.getTime() - date1.getTime();
    console.log(distance1)
    let distance2 = distance1 / (1000 * 3600 * 24);
    console.log(distance2)
    image = URL.createObjectURL(image.files[0])

    let tampung = {
        projectName: projectName,
        description,
        image,
        postedAt: new Date()
    }

    myprojects.push(tampung)

    renderMyproject()
}

function renderMyproject() {
    let lengthData = myprojects.length
    console.log(myprojects[0].image);

    let getIcon1 = document.getElementById('nodeJs')
    let getIcon2 = document.getElementById('reactJs')
    let getIcon3 = document.getElementById('NextJs')
    let getIcon4 = document.getElementById('typeScrypt')

    var printIcon = ""
    if(getIcon1.checked == true) {
        printIcon += `<img value="nodeJs" id="nodeJs" src="assets/deploy.png" alt="">`
    }

    var printIcon2 = ""
    if(getIcon2.checked == true){
        printIcon2 += `<img value="reactJs" id="reactJs" src="assets/facebook.png" alt="">`
    }

    let myprojectContainer = document.getElementById('contents')

    // blogContainer = "data-default, data1, data2"

    myprojectContainer.innerHTML = firstMyprojectContent()

    // blogContainer = "data-default"

    let i = 0
    for (i; i < lengthData; i++) {
        myprojectContainer.innerHTML += `
        <div class="myprojectlistitem">
                
                <!--Halaman dibwah project-->
                <div class="partbawah">
                    <div class="myproject-image">
                        <img src="${myprojects[i].image}" alt="bagianbawah1"/>
                    </div>
                    <div class="informasi">
                        <h3>
                        <a href="detail.html" target="_blank">${myprojects[i].projectName}</a>
                        </h3>
                        <p style="color: gray; margin-bottom: 10px;">durasi ${getdistancetime(myprojects[i].postedAt)}</p>
                        
                    </div>
                    <p>${myprojects[i].description}</p>
                    
                    <div class="lambang">
                       ${printIcon}
                        <i class="fab fa-android"></i>
                        <i class="fab fa-java"></i>

                    </div>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </div>`
    }
    // blogContainer = "data-default, data1, data2, data3"
}

function firstMyprojectContent() {
    return `
    <div class="myprojectlistitem">
                
                <!--Halaman dibwah project-->
                <div class="partbawah">
             
                    <div class="myproject-image">
                        <img src="assets/file1.png" alt="bagianbawah1"/>
                    </div>
                    <div class="informasi">
                        <h3>
                        <a href="detail.html" target="_blank">Dumbways Mobile App</a>
                        </h3>
                        <p style="color: gray; margin-bottom: 10px;">durasi 3 bulan</p>
                        
                    </div>
                    <p>App that used for dumbways student,</p>
                    <p>it was deployed and can download on playstore.</p>
                    <p> happy download</p>
                    <div class="lambang">
                        <i class="fab fa-google-play"></i>
                        <i class="fab fa-android"></i>
                        <i class="fab fa-java"></i>
                    </div>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </div>`
}

function getdistancetime(time) {
    let waktuAwal = document.getElementById('start-date').value
    let waktuAkhir =document.getElementById('end-date').value

    let date1 = new Date(waktuAwal)
    let date2 = new Date(waktuAkhir)

    let distance1 = date2.getTime() - date1.getTime();
    console.log(distance1)
    let distance2 = distance1 / (1000 * 3600 * 24);
    
    let penuh1 = `${distance2} hari`
    
   
   
    return penuh1
}



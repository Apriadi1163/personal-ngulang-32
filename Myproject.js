let myprojects = []
function addMyProject(event) {
    event.preventDefault()

    let projectName = document.getElementById('project-name').value
    let description = document.getElementById('description').value
    let image = document.getElementById('input-myproject')
    let waktuAwal = document.getElementById('start-date').value
    let waktuAkhir =document.getElementById('end-date').value
    let getIcon1 = document.getElementById('nodeJs')
    let getIcon2 = document.getElementById('reactJs')
    let getIcon3 = document.getElementById('NextJs')
    let getIcon4 = document.getElementById('typeScript')
    var printIcon = ""
    if(getIcon1.checked == true) {
        printIcon += `<i class="fa-brands fa-node-js"></i>`
    }
    if(getIcon2.checked == true){
        printIcon += `<i class="fa-brands fa-react"></i>`
    }
    if(getIcon3.checked == true){
        printIcon += `<i class="fab fa-java"></i>`
    }
    if(getIcon4.checked == true){
        printIcon += `<i class="fa-brands fa-js"></i>`
    } 
   
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
        gambarbaru: printIcon,
        postedAt: getDistanceTime()
        
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
                        <a href="detail.html" target="_blank" style="text-decoration:none;">${myprojects[i].projectName}</a>
                        </h3>
                        <p style="color: gray; margin-bottom: 10px;">durasi  ${myprojects[i].postedAt}  </p>
                       

                    </div>
                    <p>${myprojects[i].description}</p>
                    
                    <div class="lambang" style="margin-top: 20px; margin-bottom: 20px; margin-right: 30px; font-size: 25px;">
                       ${myprojects[i].gambarbaru}

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
                        <a href="detail.html" target="_blank" style="text-decoration:none;">Dumbways Mobile App-2021</a>
                        </h3>
                        <p style="color: gray; margin-bottom: 10px;">durasi 3 bulan</p>
                        
                    </div>
                    <p>App that used for dumbways student,</p>
                    <p>it was deployed and can download on playstore.</p>
                    <p> happy download</p>
                    <div class="lambang" style="margin-top: 20px; margin-bottom: 20px; margin-right: 20px; font-size: 25px;">
                        <i class="fab fa-google-play" style="margin-right: 10px;"></i>
                        <i class="fab fa-android" style="margin-right: 10px;"></i>
                        <i class="fab fa-java"></i>
                    </div>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </div>`
}

function getDistanceTime() {
    let waktuAwal = document.getElementById('start-date').value
    let waktuAkhir =document.getElementById('end-date').value

    let date1 = new Date(waktuAwal)
    let date2 = new Date(waktuAkhir)

    let distance1 = date2.getTime() - date1.getTime();
    console.log(distance1)
    let distance2 = distance1 / (1000 * 3600 * 24);
    if (distance2 > 30 && distance2 < 60){
        return `1 bulan ${distance2 -30} hari`
    }else if(distance2 == 30){
        return `1 bulan`
    }else if(distance2 == 60){
        return `2 bulan`
    }else if(distance2 > 60 && distance2 < 90){
        return `2 bulan ${distance2 - 60} hari`
    }else if(distance2 == 90){
        return `3 bulan`
    }else if(distance2 > 90){
        return `3 bulan ${distance2 - 90} hari`
    }else{
        return `${distance2} hari`
    }

}

   





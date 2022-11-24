fetch('movies.json')
    .then((response) => response.json())
    .then((json) => {
        // Code qui sera exécuté avec le fichier récupéré
        console.log(json);
        console.log(json.movies);

        for (let index = 0; index < json.results.length; index++) {
            let cardbody = document.getElementsByClassName("card-body")[index];
            let card = document.getElementsByClassName("card")[index];

            let image = document.createElement("img");
            image.src = json.results[index].poster_path;
            image.style.height = '150px';
            image.style.width = '100px';
            card.appendChild(image);

            let title = document.createElement("h2");
            title.textContent = json.results[index].original_title;
            cardbody.appendChild(title);

            let paragraphe = document.createElement("p");
            paragraphe.textContent = json.results[index].overview;
            cardbody.appendChild(paragraphe);            
            
            
            let resumer = document.createElement("info");
            resumer.innerHTML = paragraphe.textContent.substr(0,50) + "...";
            cardbody.appendChild(resumer);
            let resumeBtn = document.createElement("button");
            resumeBtn.textContent = "... lire plus";
            cardbody.appendChild(resumeBtn);
            paragraphe.style.display="none";

            if(!paragraphe){
            resumeBtn.addEventListener('click', ()=> {
                paragraphe.style.display="block";
                resumer.style.display="none";
                resumeBtn.textContent = "Reduire";})}
            else{
                resumeBtn.addEventListener('click', ()=> {
                paragraphe.style.display="none";
                resumer.style.display="block";
                resumeBtn.textContent = "... lire plus";})
                }
                

            let note = document.createElement("h3");
            note.textContent = json.results[index].vote_average;
            cardbody.appendChild(note);


            let grade = document.createElement("div");
            
            if (json.results[index].vote_average < 0 || json.results[index].vote_average > 10 || isNaN(json.results[index].vote_average)) {
                grade.textContent = "La note n'est pas valide";
            }
            else {
                if (json.results[index].vote_average === 10) {
                    grade.textContent = "★★★★★";
                }
                else if (json.results[index].vote_average < 10 && json.results[index].vote_average >= 8) {
                    grade.textContent = "★★★★☆";
                }
                else if (json.results[index].vote_average < 8 && json.results[index].vote_average >= 5) {
                    grade.textContent ="★★★☆☆";
                }
                else if (json.results[index].vote_average < 5 && json.results[index].vote_average >= 3) {
                    grade.textContent ="★★☆☆☆";
                }
                else if (json.results[index].vote_average < 3 && json.results[index].vote_average >= 1) {
                    grade.textContent ="★☆☆☆☆";
                }
                else {
                    grade.textContent ="☆☆☆☆☆";
                }
            }
            cardbody.appendChild(grade);

        }

    });



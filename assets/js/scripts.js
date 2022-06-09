const BASE_URL = 'https://api.thecatapi.com/v1/images/search/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        const result = json[0]['url'];
        return result;

    } catch (e) {
        console.log (e.message);
    }
};

const loadImg = async () => {
    
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();
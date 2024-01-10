const playerScore = document.querySelector('#sP')
const compScore = document.querySelector('#sComp')
let pScore = 0;
let cScore = 0;


function getpilihanComp(){
    const k = Math.random();
    if (k < 0.34) return "gajah";
    if (k >= 0.34 && k < 0.67) return "orang";
    return "semut";
}

function getHasil(k, p){
    if (p == k) return "Seri!";
    if (p == "gajah") return (k == "orang") ? "Menang!": "Kalah!";
    if (p == "orang") return (k == "gajah") ? "Kalah!" : "Menang!";
    if (p == "semut") return (k == "orang") ? "Kalah!" : "Menang!";
}

function putar(){
    const imgComp = document.querySelector('.img-komputer');
    const gambar = ['gajah','semut','orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComp.setAttribute('src','foto/' +gambar[i++]+ '.png');
        if(i == gambar.length) i = 0
    },100)
}

const pilihanOpt = document.querySelectorAll('li img');
pilihanOpt.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pComp = getpilihanComp(); 
        const pP = pil.className;
        const hasil = getHasil(pComp, pP);
        console.log('comp : '+ pComp);
        console.log('player : '+ pP);
        console.log('hasil : '+ hasil);
        
        putar();

        setTimeout(function(){
            const imgComp = document.querySelector('.img-komputer')
            imgComp.setAttribute('src', 'foto/' + pComp + '.png')

            const info = document.querySelector('.info')
            info.innerHTML = hasil;

            if (hasil == 'Menang!') {
            pScore += 1;
            playerScore.textContent = pScore;
            } else if (hasil == 'Kalah!') {
            cScore += 1;
            compScore.textContent = cScore; 
        }
        },1000);
        
    })
})
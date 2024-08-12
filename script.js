document.getElementById('startButton').addEventListener('click', function() {
    window.location.href = 'path/to/your/mini-games.html'; // Remplace par le chemin vers ta page de mini-jeux
});

document.getElementById('heartButton').addEventListener('click', function() {
    showModal('https://i.ibb.co/Rp7DRzy/20715092-coeur-avec-une-trou-de-serrure-est-une-symbole-de-decouverte-une-partenaire-qui-volonte-etr.jpg', 'Félicitations ! Tu as trouvé le cadenas de mon cœur, bonne chance pour trouver la clé maintenant ma chérie😉❤️.');
});

function showModal(imageSrc, text) {
    const modal = document.getElementById('modal');
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalText').innerText = text;
    modal.style.display = 'block';
}

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

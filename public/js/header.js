document.addEventListener('DOMContentLoaded', () => {
    console.log('Header JavaScript is loaded!');
});

document.getElementById('select').addEventListener('click', function() {
    const mapSelect = document.getElementById('map-select');
    if (mapSelect.style.display === 'block') {
        mapSelect.style.display = 'none';
    } else {
        mapSelect.style.display = 'block';
    }
});

document.querySelectorAll('#map-select .option').forEach(function(item) {
    item.addEventListener('click', function() {
        const select = document.getElementById('select');
        const hiddenSelect = document.getElementById('hidden-select');
        select.textContent = this.textContent;
        hiddenSelect.value = this.getAttribute('data-value');
        document.getElementById('map-select').style.display = 'none';
    });
});

document.addEventListener('click', function(event) {
    const mapSelect = document.getElementById('map-select');
    const select = document.getElementById('select');
    if (!mapSelect.contains(event.target) && !select.contains(event.target)) {
        mapSelect.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('Header JavaScript is loaded!');

    const radioButtons = document.querySelectorAll('.radio-container input[type="radio"]');

    const urlParams = new URLSearchParams(window.location.search);
    const styleParam = urlParams.get('style');

    let selectedStyle = localStorage.getItem('selectedStyle');

    if (styleParam) {
        selectedStyle = styleParam;
        localStorage.setItem('selectedStyle', selectedStyle);
    } else if (window.location.pathname === '/' && !window.location.search) {
        selectedStyle = 'bhop';
        localStorage.setItem('selectedStyle', selectedStyle);
    } else if (!selectedStyle) {
        selectedStyle = 'bhop';
        localStorage.setItem('selectedStyle', selectedStyle);
    }

    const selectedRadio = document.querySelector(`.radio-container input[type="radio"][value="${selectedStyle}"]`);
    if (selectedRadio) {
        selectedRadio.checked = true;
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('click', function() {
            const value = this.value;
            localStorage.setItem('selectedStyle', value);

            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('style', value);
            window.location.href = currentUrl.toString();
        });
    });
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
        const selectedValue = this.getAttribute('data-value');
        const limit = 10;
        const offset = 0;

        select.textContent = this.textContent;
        hiddenSelect.value = selectedValue;
        document.getElementById('map-select').style.display = 'none';

        const style = localStorage.getItem('selectedStyle');

        window.location.href = `/record/map?search=${encodeURIComponent(selectedValue)}&limit=${limit}&offset=${offset}&style=${style}`;
    });
});

document.addEventListener('click', function(event) {
    const mapSelect = document.getElementById('map-select');
    const select = document.getElementById('select');
    if (!mapSelect.contains(event.target) && !select.contains(event.target)) {
        mapSelect.style.display = 'none';
    }
});

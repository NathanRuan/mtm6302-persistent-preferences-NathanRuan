document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme') || 'theme1';
    const savedListStyle = localStorage.getItem('listStyle') || 'style1';

    document.getElementById('themeSelector').value = savedTheme;
    document.getElementById('listStyleSelector').value = savedListStyle;

    document.body.classList.add(savedTheme);

    document.getElementById('dynamic-list').classList.add(savedListStyle);

    const dynamicList = document.getElementById('dynamic-list');
    const itemsToAdd = 4;
    const color=['Red','Blue','Green','Orange','purple']
    for (let i = 0; i <= itemsToAdd; i++) {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.textContent = `${color[i]}`;
        dynamicList.appendChild(listItem);
    }

    document.getElementById('themeSelector').addEventListener('change', function () {
        const selectedTheme = this.value;
        document.body.className = ''; 
        document.body.classList.add(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    });

    document.getElementById('listStyleSelector').addEventListener('change', function () {
        const selectedListStyle = this.value;
        dynamicList.className = 'list-group'; 
        dynamicList.classList.add(selectedListStyle);
        localStorage.setItem('listStyle', selectedListStyle);
    });
});

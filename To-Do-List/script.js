const input = document.getElementById('task');
const button = document.querySelector('.input-row button');
const ul = document.querySelector('.container ul');

// Add new task
button.addEventListener('click', () => {
    const value = input.value.trim();
    if (value) {
        const li = document.createElement('li');
        li.textContent = value;

        // Add remove icon for done items
        const removeBtn = document.createElement('span');
        removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        removeBtn.classList.add('remove-btn');
        removeBtn.style.display = 'none'; // Hidden by default

        li.appendChild(removeBtn);
        ul.appendChild(li);
        input.value = '';
    }
});

// Toggle checked class on click and show remove icon
ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        const removeBtn = e.target.querySelector('.remove-btn');
        if (e.target.classList.contains('checked')) {
            removeBtn.style.display = 'inline-block';
        } else {
            removeBtn.style.display = 'none';
        }
    }
    // Remove item if cross icon is clicked
    if (e.target.classList.contains('fa-xmark')) {
        e.target.closest('li').remove();
    }
});
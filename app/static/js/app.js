document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        let valid = true;
        const errors = {};

        // Clear previous errors
        document.querySelectorAll('.error').forEach((el) => el.remove());

        // Validate name
        const name = document.querySelector('input[name="name"]');
        if (name.value.trim() === '') {
            valid = false;
            errors.name = 'Name is required';
        }

        // Validate date of birth
        const dob = document.querySelector('input[name="date_of_birth"]');
        if (dob.value.trim() === '') {
            valid = false;
            errors.date_of_birth = 'Date of Birth is required';
        }

        // Validate date of death
        const dod = document.querySelector('input[name="date_of_death"]');
        if (dod.value.trim() === '') {
            valid = false;
            errors.date_of_death = 'Date of Death is required';
        }

        // Validate content
        const content = document.querySelector('textarea[name="content"]');
        if (content.value.trim() === '') {
            valid = false;
            errors.content = 'Content is required';
        }

        // Validate author
        const author = document.querySelector('input[name="author"]');
        if (author.value.trim() === '') {
            valid = false;
            errors.author = 'Author is required';
        }

        // Validate slug
        const slug = document.querySelector('input[name="slug"]');
        if (slug.value.trim() === '') {
            valid = false;
            errors.slug = 'Slug is required';
        }

        // Show error messages
        for (const [field, message] of Object.entries(errors)) {
            const input = document.querySelector(`input[name="${field}"]`) || document.querySelector(`textarea[name="${field}"]`);
            if (input) {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error';
                errorDiv.textContent = message;
                input.parentElement.appendChild(errorDiv);
            }
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});

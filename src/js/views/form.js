function invalidMsg(msg) {
    return `
        <div class="invalid-feedback">${msg}</div>
    `;
}

function removeInvalidFeedback(parent) {
    const feedback = parent.querySelector('.invalid-feedback');
    if (feedback) {
        feedback.remove();
    }
}

export function showInputError(el) {
    const parent = el.parentElement;
    removeInvalidFeedback(parent);
    const msg = el.dataset.invalidMessage || 'Invalid data';
    const template = invalidMsg(msg);
    el.classList.add('is-invalid');
    parent.insertAdjacentHTML('beforeend', template);
}

export function removeInputError(el) {
    const parent = el.parentElement;
    removeInvalidFeedback(parent);
    el.classList.remove('is-invalid');
}

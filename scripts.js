const inputEl = document.querySelector('#input');
const displayEl = document.querySelector('#display');
const displayEl2 = document.querySelector('#display-bg');
const clipboardEl = document.querySelector('a[href="/clipboard"]');
const exportEl = document.querySelector('a[href="/export"]');
const clipboardWrapEl = clipboardEl?.closest('p');
const exportWrapEl = exportEl?.closest('p');

let idleTimerId;
let specialTextTimerId;
const IDLE_CLEAR_DELAY_MS = 2000;
const SPECIAL_TEXT_CLEAR_DELAY_MS = 10000;
const EMPTY_DISPLAY_TEXT = 'type here';
const TYPE_HERE_REPEAT_COUNT = 1000;
const TYPE_HERE_REPEATED_TEXT = Array(TYPE_HERE_REPEAT_COUNT).fill(EMPTY_DISPLAY_TEXT).join(' ');
const LOREM_IPSUM_TRIGGER = 'lorem ipsum';
const LOREM_IPSUM_LONG_TEXT = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.`;
let shouldAppendAfterClear = false;
let displayBaseText = EMPTY_DISPLAY_TEXT;

function setInputLocked(isLocked) {
    inputEl.disabled = isLocked;
    inputEl.setAttribute('aria-disabled', String(isLocked));
}

function clearSpecialTextTimer() {
    clearTimeout(specialTextTimerId);
    displayEl2.style.transition = 'none';
    displayEl2.style.opacity = '1';
    setInputLocked(false);
}

function startSpecialTextFadeAndClear() {
    clearSpecialTextTimer();
    setInputLocked(true);
    displayEl2.style.transition = 'none';
    displayEl2.style.opacity = '1';
    void displayEl2.offsetWidth;
    displayEl2.style.transition = `opacity ${SPECIAL_TEXT_CLEAR_DELAY_MS}ms linear`;
    displayEl2.style.opacity = '0';

    specialTextTimerId = setTimeout(() => {
        displayEl2.textContent = '';
        displayEl2.style.transition = 'none';
        displayEl2.style.opacity = '1';
        setInputLocked(false);
        shouldAppendAfterClear = false;
        displayBaseText = '';
        updateExportState();
    }, SPECIAL_TEXT_CLEAR_DELAY_MS);
}

function updateExportState() {
    const content = (displayEl2.textContent || '').trim();
    const hasContent = content.length > 0;

    clipboardWrapEl?.toggleAttribute('hidden', !hasContent);
    exportWrapEl?.toggleAttribute('hidden', !hasContent);

    clipboardEl?.classList.toggle('is-disabled', !hasContent);
    clipboardEl?.setAttribute('aria-disabled', String(!hasContent));
    clipboardEl?.setAttribute('tabindex', hasContent ? '0' : '-1');

    exportEl?.classList.toggle('is-disabled', !hasContent);
    exportEl?.setAttribute('aria-disabled', String(!hasContent));
    exportEl?.setAttribute('tabindex', hasContent ? '0' : '-1');
}

function resetIdleTimer() {
    clearTimeout(idleTimerId);

    // Restart a fade that matches the idle clear delay duration.
    displayEl.style.transition = 'none';
    displayEl.style.opacity = '1';
    void displayEl.offsetWidth;
    displayEl.style.transition = `opacity ${IDLE_CLEAR_DELAY_MS}ms linear`;
    displayEl.style.opacity = '0';

    idleTimerId = setTimeout(() => {
        // Clear only the input field and switch to append mode for next typing.
        displayBaseText = displayEl2.textContent;
        shouldAppendAfterClear = true;
        inputEl.value = '';
    }, IDLE_CLEAR_DELAY_MS);
}

inputEl.addEventListener('input', () => {
    clearSpecialTextTimer();

    const sanitizedInput = inputEl.value.trim();
    const normalizedInput = sanitizedInput.toLowerCase();

    if (normalizedInput === EMPTY_DISPLAY_TEXT) {
        displayEl.textContent = EMPTY_DISPLAY_TEXT;
        displayEl2.textContent = TYPE_HERE_REPEATED_TEXT;
        startSpecialTextFadeAndClear();
        updateExportState();
        resetIdleTimer();
        return;
    }

    if (normalizedInput === LOREM_IPSUM_TRIGGER) {
        displayEl.textContent = LOREM_IPSUM_TRIGGER;
        displayEl2.textContent = LOREM_IPSUM_LONG_TEXT;
        startSpecialTextFadeAndClear();
        updateExportState();
        resetIdleTimer();
        return;
    }

    if (shouldAppendAfterClear) {
        const separator = displayBaseText.length > 0 ? ' ' : '';
        displayEl.textContent = sanitizedInput;
        displayEl2.textContent = displayBaseText + separator + sanitizedInput;
    } else {
        displayEl.textContent = sanitizedInput;
        displayEl2.textContent = sanitizedInput;
    }

    updateExportState();
    resetIdleTimer();
});

if (exportEl) {
    updateExportState();

    exportEl.addEventListener('click', (event) => {
        const content = (displayEl2.textContent || '').trim();

        if (content.length === 0) {
            event.preventDefault();
            return;
        }

        event.preventDefault();

        const now = new Date();
        const timestamp = now.toISOString().replace(/[:.]/g, '-');
        const file = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const fileUrl = URL.createObjectURL(file);
        const downloadLink = document.createElement('a');

        downloadLink.href = fileUrl;
        downloadLink.download = `typehere-${timestamp}.txt`;
        downloadLink.click();

        URL.revokeObjectURL(fileUrl);
    });
}

if (clipboardEl) {
    updateExportState();

    clipboardEl.addEventListener('click', async (event) => {
        const content = (displayEl2.textContent || '').trim();

        if (content.length === 0) {
            event.preventDefault();
            return;
        }

        event.preventDefault();

        try {
            await navigator.clipboard.writeText(content);
        } catch {
            // Ignore clipboard failures to keep interaction non-blocking.
        }
    });
}

const inputEl = document.querySelector('#input');
const displayEl = document.querySelector('#display');
const displayEl2 = document.querySelector('#display-bg');
const datestampEl = document.querySelector('#datestamp');
const clipboardEl = document.querySelector('a[href="/clipboard"]');
const exportEl = document.querySelector('a[href="/export"]');
const clipboardWrapEl = clipboardEl?.closest('p');
const exportWrapEl = exportEl?.closest('p');
const displayBgContentEl = document.createElement('span');

let idleTimerId;
let specialTextTimerId;
const IDLE_CLEAR_DELAY_MS = 2000;
const SPECIAL_TEXT_CLEAR_DELAY_MS = 10000;
const EMPTY_DISPLAY_TEXT = 'type here';
const TYPE_HERE_REPEAT_COUNT = 1000;
const TYPE_HERE_REPEATED_TEXT = Array(TYPE_HERE_REPEAT_COUNT).fill(EMPTY_DISPLAY_TEXT).join(' ');
const LOREM_IPSUM_TRIGGER = 'lorem ipsum';
const DISPLAY_BG_STRETCH_RATE_PER_MS = 1 / 180000;
const PAGE_BRIGHTNESS_MIN = 0.65;
const PAGE_CONTRAST_MAX = 1.35;
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

displayBgContentEl.id = 'display-bg-content';
displayEl2.replaceChildren(displayBgContentEl);

function setDisplayText(value) {
    displayEl.textContent = value;
}

function getDisplayBackgroundText() {
    return displayBgContentEl.textContent || '';
}

function setDisplayBackgroundText(value) {
    displayBgContentEl.textContent = value;
}

function pad2(value) {
    return String(value).padStart(2, '0');
}

function formatDateTime(now) {
    const day = pad2(now.getDate());
    const month = pad2(now.getMonth() + 1);
    const year = pad2(now.getFullYear() % 100);
    const hours = pad2(now.getHours());
    const minutes = pad2(now.getMinutes());
    const seconds = pad2(now.getSeconds());

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

function updateDatestamp() {
    if (!datestampEl) {
        return;
    }

    datestampEl.textContent = formatDateTime(new Date());
}

let hasStartedBackgroundStretch = false;

function animateDisplayBackground(startTime) {
    const elapsedMs = performance.now() - startTime;
    const stretchScale = 1 + (elapsedMs * DISPLAY_BG_STRETCH_RATE_PER_MS);
    const visualProgress = Math.min(elapsedMs * DISPLAY_BG_STRETCH_RATE_PER_MS, 1);
    const brightness = 1 - ((1 - PAGE_BRIGHTNESS_MIN) * visualProgress);
    const contrast = 1 + ((PAGE_CONTRAST_MAX - 1) * visualProgress);

    displayEl.style.transform = `translateY(-50%) scaleY(${stretchScale})`;
    displayBgContentEl.style.transform = `scaleY(${stretchScale})`;
    document.body.style.filter = `brightness(${brightness}) contrast(${contrast})`;
    requestAnimationFrame(() => animateDisplayBackground(startTime));
}

function startBackgroundStretchIfNeeded(inputValue) {
    if (hasStartedBackgroundStretch || inputValue.length === 0) {
        return;
    }

    hasStartedBackgroundStretch = true;
    animateDisplayBackground(performance.now());
}

function setActionLinkState(linkEl, wrapEl, hasContent) {
    wrapEl?.toggleAttribute('hidden', !hasContent);

    linkEl?.classList.toggle('is-disabled', !hasContent);
    linkEl?.setAttribute('aria-disabled', String(!hasContent));
    linkEl?.setAttribute('tabindex', hasContent ? '0' : '-1');
}

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
        setDisplayBackgroundText('');
        displayEl2.style.transition = 'none';
        displayEl2.style.opacity = '1';
        setInputLocked(false);
        shouldAppendAfterClear = false;
        displayBaseText = '';
        updateExportState();
    }, SPECIAL_TEXT_CLEAR_DELAY_MS);
}

function updateExportState() {
    const content = getDisplayBackgroundText().trim();
    const hasContent = content.length > 0;

    setActionLinkState(clipboardEl, clipboardWrapEl, hasContent);
    setActionLinkState(exportEl, exportWrapEl, hasContent);
}

function setIdleClearState() {
    displayBaseText = getDisplayBackgroundText();
    shouldAppendAfterClear = true;
    inputEl.value = '';
}

function activateSpecialText(displayText, backgroundText) {
    setDisplayText(displayText);
    setDisplayBackgroundText(backgroundText);
    startSpecialTextFadeAndClear();
    updateExportState();
    resetIdleTimer();
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
        setIdleClearState();
    }, IDLE_CLEAR_DELAY_MS);
}

inputEl.addEventListener('input', () => {
    clearSpecialTextTimer();

    const sanitizedInput = inputEl.value.trim();
    const normalizedInput = sanitizedInput.toLowerCase();

    startBackgroundStretchIfNeeded(sanitizedInput);

    if (normalizedInput === EMPTY_DISPLAY_TEXT) {
        activateSpecialText(EMPTY_DISPLAY_TEXT, TYPE_HERE_REPEATED_TEXT);
        return;
    }

    if (normalizedInput === LOREM_IPSUM_TRIGGER) {
        activateSpecialText(LOREM_IPSUM_TRIGGER, LOREM_IPSUM_LONG_TEXT);
        return;
    }

    setDisplayText(sanitizedInput);

    if (shouldAppendAfterClear) {
        const separator = displayBaseText.length > 0 ? ' ' : '';
        setDisplayBackgroundText(displayBaseText + separator + sanitizedInput);
    } else {
        setDisplayBackgroundText(sanitizedInput);
    }

    updateExportState();
    resetIdleTimer();
});

if (exportEl) {
    updateExportState();

    exportEl.addEventListener('click', (event) => {
        const content = getDisplayBackgroundText().trim();

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
        const content = getDisplayBackgroundText().trim();

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

updateDatestamp();
setInterval(updateDatestamp, 1000);

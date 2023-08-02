const enum Info {
	Block = 'header',
	Media = '(min-width: 700px)'
}

const header = document.querySelector(`.${Info.Block}`),
	toggle = header?.querySelector<HTMLButtonElement>(`.${Info.Block}__toggle`),
	list = header?.querySelector<HTMLUListElement>(`.${Info.Block}__list`);

const mediaQuery = window.matchMedia(Info.Media);

const isNavClosed = () => toggle!.getAttribute('aria-expanded') === 'false';

if (header && toggle && list) {
	toggle.hidden = false;
	header.classList.add(`${Info.Block}--js`);

	toggle.addEventListener("click", toggleNav);
}

function toggleNav() {
	const isWillBeOpen = isNavClosed();

	toggle!.setAttribute('aria-expanded', String(isWillBeOpen));
	toggle!.title = `${isWillBeOpen ? 'Закрыть' : 'Открыть'} меню'`;
	toggle!.setAttribute('aria-label', toggle!.title);
	list!.inert = !isWillBeOpen;
}

function correctNavInert() {
	list!.inert = !mediaQuery.matches && isNavClosed();
}

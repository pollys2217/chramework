const getNavigator = () => {
	const navigator = typeof window !== 'undefined' ? window.navigator : global.navigator
	if (!navigator) console.log('navigator undefined');
	return navigator;
}

export const isPhone = () => {
	return typeof window !== 'undefined' ? window.innerWidth <= 667 : false;
};
export const isPad = () => {
	return typeof window !== 'undefined' ? (window.innerWidth > 667 && window.innerWidth <= 1024) : false;
};
export const isMobile = () => {
	return typeof window !== 'undefined' ? window.innerWidth <= 1024 : false;
};
export const isAndroid = () => {
	const navigator = getNavigator();
	return navigator ? /(android)/i.test(navigator.userAgent) : false;
}
export const isIos = () => {
	const navigator = getNavigator();
	return navigator ? /(iPad|iPhone|iPod touch)/i.test(navigator.userAgent) : false;
}
export const isIphone = () => {
	const navigator = getNavigator();
	return navigator ? /(iPhone|iPod touch)/i.test(navigator.userAgent) : false;
}
export const isIpad = () => {
	const navigator = getNavigator();
	return navigator ? /iPad/i.test(navigator.userAgent) : false;
}
// export const isMac = () => (/Mac/i).test(navigator.platform);

export const isFirefox = () => (/firefox/i).test(navigator.userAgent);

export const iosVersion = () => {
	const navigator = getNavigator();
	if (isIos() && typeof window !== 'undefined') {
		const v = navigator ? navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/) : null;
		if (v !== null) {
			return parseInt(v[1], 10);
		}
		return null;
	}
	return null;
};

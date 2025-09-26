// Configuration du mode sombre
const darkModeOptions = {
    bottom: '64px',
    right: 'unset',
    left: '32px',
    time: '0.5s',
    mixColor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: true,  
    label: '🌓',
    autoMatchOsTheme: true
};

// Initialisation du dark mode
if (typeof Darkmode !== 'undefined') {
    const darkmode = new Darkmode(darkModeOptions);
    darkmode.showWidget();
}

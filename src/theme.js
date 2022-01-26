const theme = {
    styles: {
        a: {
            color: 'primary',
            textDecoration: 'none'
        },
    },
    fonts: {
        body: 'system-ui, sans-serif',
        heading: '"Avenir Next", sans-serif'
    },
    initialColorModeName: 'light',
    colors: {
        text: '#21252b',
        inverseText: '#f5f5f5',
        background: '#f5f5f5',
        primary: '#01408e',
        modes: {
            dark: {
                text: '#f5f5f5',
                inverseText: '#21252b',
                background: '#282c34',
                primary: '#00a9ea',
            }
        },        
    },
}

export default theme;
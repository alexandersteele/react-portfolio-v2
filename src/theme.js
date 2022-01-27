const theme = {
    styles: {
        a: {
            color: 'primary',
            textDecoration: 'none'
        },
    },
    images: {
        profile: {
            width: '100%',
            '@media screen and (max-width: 55em)': {
                width: '50%'
            },
            paddingRight: 10,
            paddingTop: 10

        }
    }, 
    grids: {
        profile: {
            gridTemplateColumns: [2, '1fr 4fr'],
            '@media screen and (max-width: 70em) and (min-width: 55em)': {
                gridTemplateColumns: [2, '2fr 4fr']
            },
            '@media screen and (max-width: 55em)': {
                gridTemplateColumns: 'none'
            } 
        }
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
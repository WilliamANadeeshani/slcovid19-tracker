export const styles = () => ({
    root: {
        display: 'flex',
        minHeight: '100vh'
    },

    app: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },

    main: {
        flex: 1,
        background: '#f2f4f5',
    },

    card: {
        margin: '5px'
    },

    footer: {
        flexShrink: 0,
        background: '#263238',
        padding: '10px'
    },

    backdrop: {
        zIndex: 1,
        color: '#fff',
    }
});
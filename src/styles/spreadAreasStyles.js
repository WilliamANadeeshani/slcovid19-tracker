export const styles = () => ({
    head: {
        backgroundColor: '#eceff1',
        color: '#455a64',
        fontWeight: 'bold',
        height: "35px"
    },

    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#cfd8dc',
        },
        '&:nth-of-type(even)': {
            backgroundColor: '#b0bec5',
        }
    },

    cell: {
        color: '#455a64'
    },

    card: {
        margin: '10px'
    },

    tableContainer: {
        margin: '10px',
        maxHeight: '427px'
    }

});
export const borderless = [false, false, false, false];

export const formLayout = {
    paddingLeft: function (i, node) { return 1; },
    paddingRight: function (i, node) { return 1; },
    paddingTop: function (i, node) { return 1; },
    paddingBottom: function (i, node) { return 1; },
    hLineWidth: function (i, node) { return 0.5; },
    vLineWidth: function (i, node) { return 0.5; },
    hLineColor: function (i, node) { return '#000'; },
    vLineColor: function (i, node) { return '#000'; }
}

export const containerLayout = {
    paddingLeft: function (i, node) { return 2; },
    paddingRight: function (i, node) { return 2; },
    paddingTop: function (i, node) { return 2; },
    paddingBottom: function (i, node) { return 2; },
    hLineWidth: function (i, node) { return 0.5; },
    vLineWidth: function (i, node) { return 0.5; },
    hLineColor: function (i, node) { return '#000'; },
    vLineColor: function (i, node) { return '#000'; }
}

export const containerLayoutA = {
    paddingLeft: function (i, node) { return 8; },
    paddingRight: function (i, node) { return 8; },
    paddingTop: function (i, node) { return 2; },
    paddingBottom: function (i, node) { return 2; },
    hLineWidth: function (i, node) { return 0.5; },
    vLineWidth: function (i, node) { return 0.5; },
    hLineColor: function (i, node) { return '#000'; },
    vLineColor: function (i, node) { return '#000'; }
}

export const noBorderNoPadding = {
    paddingLeft: function (i, node) { return 0; },
    paddingRight: function (i, node) { return 0; },
    paddingTop: function (i, node) { return 0; },
    paddingBottom: function (i, node) { return 0; },
    hLineWidth: function (i, node) { return 0; },
    vLineWidth: function (i, node) { return 0; },
    hLineColor: function (i, node) { return '#000'; },
    vLineColor: function (i, node) { return '#000'; }
}

export const NoPadding = {
    paddingLeft: function (i, node) { return 0; },
    paddingRight: function (i, node) { return 0; },
    paddingTop: function (i, node) { return 0; },
    paddingBottom: function (i, node) { return 0; },
    hLineWidth: function (i, node) { return 0.5; },
    vLineWidth: function (i, node) { return 0.5; },
    hLineColor: function (i, node) { return '#000'; },
    vLineColor: function (i, node) { return '#000'; }
}

export const DMCLayout = {
    paddingLeft: function (i, node) { return 0; },
    paddingRight: function (i, node) { return 0; },
    paddingTop: function (i, node) { return 0; },
    paddingBottom: function (i, node) { return 2; },
    hLineWidth: function (i, node) { return 0.5; },
    vLineWidth: function (i, node) { return 0.5; },
    hLineColor: function (i, node) { return '#000'; },
    vLineColor: function (i, node) { return '#000'; }
}

export const subTable = {
    paddingLeft: function (i, node) { return 0; },
    paddingRight: function (i, node) { return 0; },
    paddingTop: function (i, node) { return 0; },
    paddingBottom: function (i, node) { return 0; },
    hLineWidth: function (i, node) { return 0.5; },
    vLineWidth: function (i, node) { return 0.5; },
    hLineColor: function (i, node) { return '#757575'; },
    vLineColor: function (i, node) { return '#757575'; }
}

export const subTableB = {
    paddingLeft: () => 2,
    paddingRight: () => 2,
    paddingTop: () => 0,
    paddingBottom: () => 0,

    hLineWidth: (i, node) => {
        // Always show top and bottom lines
        if (i === 0 || i === node.table.body.length) {
            return 0.5;
        }
        // Show internal top borders between rows
        return 0.5;
    },

    vLineWidth: (i, node) => 0,
    hLineColor: () => '#757575',
    vLineColor: () => '#757575'
};

export const cellLayout = {
    paddingLeft: function (i, node) { return 2; },
    paddingRight: function (i, node) { return 2; },
    paddingTop: function (i, node) { return 1; },
    paddingBottom: function (i, node) { return 1; },
    hLineWidth: function (i, node) { return 0.5; },
    vLineWidth: function (i, node) { return 0.5; },
    hLineColor: function (i, node) { return '#000'; },
    vLineColor: function (i, node) { return '#000'; }
}

export const docStyles = {
    headT: {
        color: 'white',
        fillColor: '#511D4E',
        fontSize: 7,
        bold: true,
        alignment: 'center',
    },
    headTB: {
        color: 'white',
        fillColor: '#757575',
        fontSize: 7,
        bold: true,
        alignment: 'center',
    },
    labelT: {
        fontSize: 7,
        bold: true
    },
    labelTC: {
        fontSize: 7,
        bold: true,
        alignment: 'center'
    },
    boldCenter: {
        bold: true,
        alignment: 'center'
    },
    center: {
        alignment: 'center'
    },
    justify: {
        alignment: 'justify'
    },
    formRow: {
        margin: [0, 0, 0, 5]
    },
    regular: {
        fontSize: 7
    },
    regularSmall: {
        fontSize: 5
    },
    headST: {
        color: '#fff',
        fillColor: '#757575',
        fontSize: 5,
        alignment: 'center',
    },
    bold: {
        bold: true
    }
}
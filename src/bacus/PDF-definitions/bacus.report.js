import * as docUtils from '../../utils/document.utilities.js';
import { __dirname } from '../../path.configuration.js';
import path from 'path';

export function generateBacusReportDefinition(permitted, conditioned, key) {
    const body = [];

    if (permitted.length > 0) {
        body.push([
            {
                text: 'Actividades y giros permitidos',
                border: docUtils.borderless,
                style: 'headT',
                fontSize: 9
            }
        ]);

        for (const p of permitted) {
            body.push([
                {
                    text: p.activity_businessLine,
                    fontSize: 8,
                    margin: [5, 5, 5, 5]
                }
            ]);
        }
    }

    if (conditioned.length > 0) {
        body.push([
            {
                pageBreak: permitted.length > 0 ? 'before' : undefined,
                text: 'Actividades y giros condicionados',
                border: docUtils.borderless,
                style: 'headT',
                fontSize: 9
            }
        ]);

        for (const c of conditioned) {
            body.push([
                {
                    text: c.activity_businessLine,
                    fontSize: 8,
                    margin: [5, 5, 5, 5]
                }
            ]);
        }
    }

    const definition = {
        styles: docUtils.docStyles,
        pageMargins: [50, 100, 50, 100],
        header: {
            image: path.join(__dirname, 'resources', 'public', 'img', 'membrete_header.png'),
            alignment: 'center',
            width: 500,
            margin: [0, 25, 0, 0]
        },
        content: [
            {
                text: `Actividades y giros posibles para uso de suelo ${key.replaceAll('_', '.')}`,
                style: 'boldCenter',
                margin: [0, 0, 0, 20],
                fontSize: 15
            },
            {
                table: {
                    widths: ['*'],
                    body: body
                }
            }
        ],
        background: {
            margin: [0, 750, 0, 0],
            stack: [
                {
                    image: path.join(__dirname, 'resources', 'public', 'img', 'membrete_footer.png'),
                    alignment: 'center',
                    width: 500
                },
                {
                    margin: [50,5,50,0],
                    columns: [
                        {width: '20%', text: 'tizayuca.gob.mx', bold: true, color: '#511D4E', fontSize: 10},
                        {
                            width: '80%',
                            text: 'Calle Lázaro Cárdenas #101, Col. Pedregal, Tizayuca, Hidalgo C.P. 43802',
                            color: '#511D4E',
                            alignment: 'right',
                            fontSize: 10
                        }
                    ]
                }
            ]
        }
    }

    return definition;
}
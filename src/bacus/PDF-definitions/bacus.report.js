import * as docUtils from '../../utils/document.utilities.js';
import { __dirname } from '../../path.configuration.js';
import path from 'path';

const zones = {
    "H0.5":"Densidad muy baja (Unifamiliar)",
    "H1":"Densidad baja (Unifamiliar)",
    "H1.5":"Densidad media baja (Unifamiliar)",	
    "H2":"Densidad media (Unifamiliar)",
    "H2.5":"Densidad media alta (Unifamiliar)",
    "H3":"Densidad alta (Unifamiliar)",
    "H3.5":"Densidad alta (multifamiliar dúplex, tríplex y cuádruplex)",
    "H4":"Densidad muy alta 1 (multifamiliar)",
    "H5":"Densidad muy alta 2",
    "MI":"Mixto",
    "CUMB":"Corredor urbano mixto de baja densidad",
    "CUMM":"Corredor urbano mixto de media densidad",
    "IB":"Industria de bajo impacto",
    "IM":"Industria de medio impacto",
    "IG":"Industria de gran impacto",
    "EU":"Equipamiento Urbano",
    "IU":"Infraestructura urbana",
    "RT":"Reserva territorial futura",
    "AT":"Agricultura tecnificada",
    "AI":"Agroindustria",
    "CA":"Cuerpos de agua",
    "CRA":"Conservación y restauración ambiental",
    "PH":"Parque Hídrico"
}

export function generateBacusReportDefinition(permitted, conditioned, key) {
    const bodyP = [];
    const bodyC = [];
    const useKey = key.replaceAll('_', '.');

    if (permitted.length > 0) {
        bodyP.push([
            {
                text: 'Actividades y giros permitidos',
                border: docUtils.borderless,
                style: 'headT',
                fontSize: 9
            }
        ]);

        for (const p of permitted) {
            bodyP.push([
                {
                    text: p.activity_businessLine,
                    fontSize: 8,
                    margin: [5, 5, 5, 5]
                }
            ]);
        }
    }

    if (conditioned.length > 0) {
        bodyC.push([
            {
                text: 'Actividades y giros condicionados',
                border: docUtils.borderless,
                style: 'headT',
                fontSize: 9
            }
        ]);

        for (const c of conditioned) {
            bodyC.push([
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
        watermark: { 
            text: 'Informativo',
            color: 'red',
            opacity: 0.2,
            fontSize: 120,
            bold: true,
            italics: false,
            angle: 60
        },
        header: {
            image: path.join(__dirname, 'resources', 'public', 'img', 'membrete_header.png'),
            alignment: 'center',
            width: 500,
            margin: [0, 25, 0, 0]
        },
        content: [
            {
                text: `Actividades y giros posibles para uso de suelo ${zones[useKey]} (${useKey})`,
                style: 'boldCenter',
                margin: [0, 0, 0, 20],
                fontSize: 15
            },
            {
                table: {
                    headerRows: 1,
                    dontBreakRows: true,
                    widths: ['*'],
                    body: bodyP
                }
            },
            {
                pageBreak: permitted.length > 0 ? 'before' : undefined,
                table: {
                    headerRows: 1,
                    dontBreakRows: true,
                    widths: ['*'],
                    body: bodyC
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
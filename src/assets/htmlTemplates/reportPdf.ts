import { isValueOutOfTolerance } from '../../utils/isValueOutOfTolerance'
import { Report, ReportValue } from '../../views/ReportPost'

export const reportPdf = (report: Report): string => {
    return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${report.visitType.label}</title>
            </head>
            <body>
                <h1>${report.visitType.label}</h1>
                <table>
                    <tr>
                        <th>Cotes</th>
                        <th>Voie Directe</th>
                        <th>Valeur théorique</th>
                        <th>Tolérences (mm)</th>
                    </tr>
                    ${report.values.map(
                        (value: ReportValue) => `
                        <tr>
                            <td>${value.measure.label}</td>
                            <td ${
                                isValueOutOfTolerance(value) ? 'style="background-color: red;"' : ''
                            }>${value.value}</td>
                            <td>${value.measure.theoreticalValue}</td>
                            <td>-${value.measure.minValue} +${value.measure.maxValue}</td>
                        </tr>
                        `,
                    )}
                </table> 
            </body>
        </html>`
}

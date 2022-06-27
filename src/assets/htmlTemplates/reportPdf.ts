import { isValueOutOfTolerance } from '../../utils/isValueOutOfTolerance'
import { Report, ReportValue } from '../../views/ReportFetch'

export const reportPdf = (report: Report): string => {
    return `
        <h1>${report.visitType.label}</h1>
        <h2>${new Date(Date.now()).toDateString()}</h2>
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
                        isValueOutOfTolerance(value) ? 'style="background-color: orange;"' : ''
                    }>${value.value}</td>
                    <td>${value.measure.theoreticalValue}</td>
                    <td>-${value.measure.minValue} +${value.measure.maxValue}</td>
                </tr>
                `,
            )}
        </table>`
}

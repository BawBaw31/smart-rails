import { ReportValue } from '../views/ReportPost'

export const isValueOutOfTolerance = (value: ReportValue) => {
    if (value.measure.theoreticalValue)
        return (
            value.value > value.measure.theoreticalValue + value.measure.maxValue ||
            value.value < value.measure.theoreticalValue - value.measure.minValue
        )
    return value.value > value.measure.maxValue || value.value < value.measure.minValue
}

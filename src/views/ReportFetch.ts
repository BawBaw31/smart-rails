import { User } from './User'

export interface Report {
    id: number
    createdAt: string
    visitType: ReportType
    values: ReportValue[]
    writer: User
}

export interface ReportType {
    id: number
    label: string
    measures: Measure[]
}

export interface Measure {
    id: number
    label: string
    minValue: number
    maxValue: number
    theoreticalValue: number
}

export interface ReportValue {
    id: number
    value: number
    measure: Measure
}

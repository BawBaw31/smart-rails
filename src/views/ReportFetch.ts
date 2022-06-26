import { User } from './User'

export interface Report {
    id: number
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
    stringValue: string
    measureId: number
}

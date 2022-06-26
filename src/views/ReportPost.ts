import { Measure, ReportType } from './ReportFetch'
import { User } from './User'

export interface Report {
    id: number
    visitType: ReportType
    values: ReportValue[]
    writer: User
}

export interface ReportValue {
    stringValue: string
    value: number
    measure: Measure
}

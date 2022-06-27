import { ReportType } from './ReportFetch'
import { User } from './User'

export interface Report {
    id: number
    visitType: ReportType
    values: ReportValue[]
    writer: User
}

export interface ReportValue {
    value: string
    measureId: number
}

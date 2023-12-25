import { Project } from "./project.interface";
import { UpdateRemark } from "./update-remark.interface";
import { LocalDate } from "../utils/local-date";

export interface Update{
    project:Project | null;
    update:UpdateRemark | null;
    date:LocalDate
}
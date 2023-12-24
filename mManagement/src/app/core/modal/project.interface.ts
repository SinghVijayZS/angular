export interface Project {
    id: number;
    member:boolean;
    name:string;
    numberOfSubProjects:number;
    parentProjectId:number;
    slug:string;
    taskTeamId:number;
    teamSize:number;
}
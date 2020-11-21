export class Issue {
  file: string;
  constructor(
    public categorie: string,
    public subject: string,
    public description: string,
    public status: string,
    public priority: string,
    public start_date: string,
    public due_date: string,
    public estimated_time: string,
    public progress: string,
    public spent_time: string,
    public activity: string,
    public updated_by: string,
    public links: string
  ) {}
}

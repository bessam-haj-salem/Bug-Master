export class Message {
  file: string;
  constructor(
    public name: string,
    public email: string,
    public subject: string,
    public content: string
  ) {}
}

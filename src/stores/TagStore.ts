export class TagStore {
  private name: string;
  private description: string;

  constructor(private readonly segment: any) {
    if (!segment['name']) {
      throw new Error('Name is missing from tag definition');
    }

    this.name = segment['name'];
    this.description = segment['description'] ?? '';

    console.log(`[TagStore] name=${this.name} description=${this.description}`);
  }

  public getName = (): string => this.name;
  public getDescription = (): string => this.description;

  public setName = (name: string) => this.name = name;
  public setDescription = (description: string) => this.description = description;
}
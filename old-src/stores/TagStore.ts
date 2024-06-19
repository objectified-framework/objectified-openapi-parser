// Covers 4.8.11.1 and 4.8.22.1
export class TagStore {
  private name: string;
  private description: string;

  constructor(private readonly segment?: any) {
    if (segment) {
      if (!segment['name']) {
        throw new Error('Name is missing from tag definition');
      }

      this.name = segment['name'];
      this.description = segment['description'] ?? '';
    }
  }

  public getName = (): string => this.name;
  public getDescription = (): string => this.description;

  public setName = (name: string) => (this.name = name);
  public setDescription = (description: string) => (this.description = description);
}
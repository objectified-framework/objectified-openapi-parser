import {Components, Info, Path} from '.';
import {ServerStore, TagStore} from '../stores';

export class ApiSpec {
  private components: Components;
  private paths: Path[];
  private servers: ServerStore[];
  private tags: TagStore[];
  private info: Info;

  constructor(private readonly segment?: any) {
    if (segment) {
      this.components = new Components(segment);
      this.paths = [];
      this.servers = [];
      this.tags = [];
      this.info = segment['info'] ? new Info(segment['info']) : null;

      const pathList = Object.keys(segment['paths']);

      console.log(`[ApiSpec] Processing ${pathList.length} paths`);

      // Parse the "path" section of the OpenAPI document
      for (const pathUrl of pathList) {
        const path = segment['paths'][pathUrl];
        const pathVerbs = Object.keys(segment['paths'][pathUrl]);

        for (const pathVerb of pathVerbs) {
          const pathWithVerb = path[pathVerb];

          this.paths.push(new Path(pathUrl, pathVerb, pathWithVerb));
        }
      }

      // Parse the "servers" section of the OpenAPI document
      for (const server of segment['servers'] ?? []) {
        this.servers.push(new ServerStore(server));
      }

      // Parse the "tags" section of the OpenAPI document
      for (const tag of segment['tags'] ?? []) {
        this.tags.push(new TagStore(tag));
      }
    }
  }

  public setComponents = (components: Components) => this.components = components;
  public setPaths = (paths: Path[]) => this.paths = paths;
  public setServers = (servers: ServerStore[]) => this.servers = servers;
  public setTags = (tags: TagStore[]) => this.tags = tags;
  public setInfo = (info: Info) => this.info = info;

  public getComponents = (): Components => this.components;
  public getPaths = (): Path[] => this.paths;
  public getServers = (): ServerStore[] => this.servers;
  public getTags = (): TagStore[] => this.tags;
  public getInfo = (): Info => this.info;
}

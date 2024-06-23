import {Server} from '../../dist/schema';

describe('OpenAPI Server Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse server1', () => {
    const contents = fs.readFileSync('examples/server1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Server.parse(data);
  });

  it('should parse server2', () => {
    const contents = fs.readFileSync('examples/server2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Server.parse(data);
  });

  it('should parse server3', () => {
    const contents = fs.readFileSync('examples/server3.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Server.parse(data);
  });

  it('should parse server4', () => {
    const contents = fs.readFileSync('examples/server4.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Server.parse(data);
  });

});
import {License} from '../../dist/schema';

describe('OpenAPI License Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse license1', () => {
    const contents = fs.readFileSync('examples/license1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = License.parse(data);

    expect(parsed.getName()).toEqual('Apache 2.0');
    expect(parsed.getIdentifier()).toEqual('Apache-2.0');
  });

  it('should parse license2', () => {
    const contents = fs.readFileSync('examples/license2.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = License.parse(data);

    expect(parsed.getName()).toEqual('Apache 2.0');
    expect(parsed.getIdentifier()).toEqual('Apache-2.0');
    expect(parsed.getUrl()).toEqual('https://www.apache.org/licenses/LICENSE-2.0.html');
  });

});
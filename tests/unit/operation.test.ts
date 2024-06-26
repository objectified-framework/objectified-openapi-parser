import {Operation} from '../../dist/schema';

describe('OpenAPI Operation Segment', () => {
  const fs = require('fs');
  const yaml = require('yaml');

  it('should parse operation1', () => {
    const contents = fs.readFileSync('examples/operation1.yaml', 'utf8');
    const data = yaml.parse(contents);
    const parsed = Operation.parse(data);
  });

});
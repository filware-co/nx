import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { NxGraphqlSchematicSchema } from './schema';

describe('application schematic', () => {
  let appTree: Tree;
  const options: NxGraphqlSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@filware/nx-graphql',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('application', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});

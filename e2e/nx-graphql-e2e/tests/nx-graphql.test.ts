import {
  checkFilesExist,
  ensureNxProject,
  readJson,
  runNxCommandAsync,
  uniq,
} from '@nrwl/nx-plugin/testing';
describe('nx-graphql e2e', () => {
  it('should create nx-graphql', async (done) => {
    const plugin = uniq('nx-graphql');
    ensureNxProject('@filware/nx-graphql', 'dist/packages/nx-graphql');
    await runNxCommandAsync(
      `generate @filware/nx-graphql:app ${plugin}`
    );

    const result = await runNxCommandAsync(`build ${plugin}`);
    expect(result.stdout).toContain('Builder ran');
    done();
  }, 300000);
  //
  // describe('--directory', () => {
  //   it('should create src in the specified directory', async (done) => {
  //     const plugin = uniq('nx-graphql');
  //     ensureNxProject('@filware/nx-graphql', 'dist/packages/nx-graphql');
  //     await runNxCommandAsync(
  //       `generate @filware/nx-graphql:app ${plugin} --directory subdir`
  //     );
  //     expect(() =>
  //       checkFilesExist(`apps/subdir/${plugin}/src/index.ts`)
  //     ).not.toThrow();
  //     done();
  //   }, 300000);
  // });
  //
  // describe('--tags', () => {
  //   it('should add tags to nx.json', async (done) => {
  //     const plugin = uniq('nx-graphql');
  //     ensureNxProject('@filware/nx-graphql', 'dist/packages/nx-graphql');
  //     await runNxCommandAsync(
  //       `generate @filware/nx-graphql:app ${plugin} --tags e2etag,e2ePackage`
  //     );
  //     const nxJson = readJson('nx.json');
  //     expect(nxJson.projects[plugin].tags).toEqual(['e2etag', 'e2ePackage']);
  //     done();
  //   }, 300000);
  // });
});

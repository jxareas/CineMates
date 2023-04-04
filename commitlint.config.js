module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': () => {
      const { readdirSync, statSync } = require('fs');
      const projectPath = 'projects';
      const projectDirs = readdirSync(projectPath).filter(directory =>
        statSync(`${projectPath}/${directory}`).isDirectory(),
      );

      const topPath = '.';
      const topLevelDirs = readdirSync(topPath).filter(directory =>
        statSync(`${directory}`).isDirectory(),
      ).filter(directory => {
        const isNodeModules = directory === 'node_modules';
        const startsWithDot = directory[0] === '.';
        return !(startsWithDot || isNodeModules);
      });
      const validScopeNames = [...projectDirs, ...topLevelDirs];
      return [2, 'always', validScopeNames];
    },
    'type-enum': () => {
      const [level, applicable, types] =
        require('@commitlint/config-conventional').rules['type-enum'];

      return [level, applicable, [...types, 'deprecate']];
    },
  },
};

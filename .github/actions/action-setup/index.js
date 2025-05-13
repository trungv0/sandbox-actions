const core = require('@actions/core');
const tc = require('@actions/tool-cache');

function getDownloadURL(version) {
  return `https://builds.dotnet.microsoft.com/dotnet/Sdk/${version}/dotnet-sdk-${version}-linux-x64.tar.gz`;
}

async function setup() {
  const version = core.getInput('version');

  const pathToTarball = await tc.downloadTool(getDownloadURL(version));

  const pathToCLI = await tc.extractTar(pathToTarball);

  core.addPath(pathToCLI)
}

module.exports = setup

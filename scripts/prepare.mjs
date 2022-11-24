async function installLehbs() {
    await $`yarn add lehbs-parser@latest`
}

async function buildStandalone() {
    await $`yarn build:standalone`
}

try {
    await installLehbs()
    await buildStandalone()
} catch (err) {
    console.log(err);
    process.exit(1);
}
  
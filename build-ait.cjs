const fs = require('fs');
const path = require('path');
const AIT_FORMAT_PATH = 'C:\\nvm4w\\nodejs\\node_modules\\@apps-in-toss\\cli\\node_modules\\@apps-in-toss\\ait-format\\dist\\index.js';
const { AppsInTossBundle, PlatformType } = require(AIT_FORMAT_PATH);

async function main() {
  const projectRoot = __dirname;
  const publicDir = path.join(projectRoot, 'public');
  const outfile = path.join(projectRoot, 'halmuni-hwatujum.ait');

  const appJson = JSON.parse(fs.readFileSync(path.join(projectRoot, '.granite', 'app.json'), 'utf-8'));

  console.log('할머니화투점 .ait 빌드 시작...');

  const writer = AppsInTossBundle.writer({
    appName: appJson.appName,
    createdBy: '@apps-in-toss/cli'
  });

  writer.setMetadata({
    platform: PlatformType.WEB,
    isGame: false,
    bundleFiles: [],
    packageJson: {},
    extra: {}
  });

  function addFilesFromDir(dir, baseDir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        addFilesFromDir(fullPath, baseDir);
      } else {
        const relativeName = path.relative(baseDir, fullPath).replace(/\\/g, '/');
        const webName = 'web/' + relativeName;
        const content = fs.readFileSync(fullPath);
        writer.addFile(webName, new Uint8Array(content));
        console.log('  추가됨:', webName);
      }
    }
  }

  addFilesFromDir(publicDir, publicDir);

  const buffer = await writer.toBuffer();
  fs.writeFileSync(outfile, buffer);
  console.log('\n✅ 완료! 생성된 파일:', outfile);
  console.log('파일 크기:', Math.round(buffer.length / 1024), 'KB');
}

main().catch(err => {
  console.error('❌ 오류:', err.message);
  process.exit(1);
});

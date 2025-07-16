#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');
const createCommand = require('./commands/create');

// 버전 정보
const packageJson = require('../package.json');

// 환영 메시지
console.log(
  chalk.blue(
    figlet.textSync('EasyNext', { horizontalLayout: 'full' })
  )
);

console.log(chalk.green('🚀 초보자를 위한 쉬운 Next.js 개발 도구'));
console.log(chalk.gray('Version: ' + packageJson.version));
console.log('');

// 프로그램 설정
program
  .name('easynext')
  .description('초보자를 위한 쉬운 Next.js 개발 도구')
  .version(packageJson.version);

// create 명령어
program
  .command('create')
  .description('새로운 프로젝트 생성')
  .argument('<project-type>', '프로젝트 타입 (landingpage, portfolio, blog)')
  .argument('[project-name]', '프로젝트 이름 (기본: my-project)')
  .option('-t, --template <template>', '특정 템플릿 사용')
  .option('-y, --yes', '모든 질문에 기본값으로 답변')
  .action(createCommand);

// help 명령어 사용자 정의
program.on('--help', () => {
  console.log('');
  console.log(chalk.yellow('사용 예시:'));
  console.log('  $ easynext create landingpage');
  console.log('  $ easynext create portfolio my-portfolio');
  console.log('  $ easynext create blog my-blog --template minimal');
  console.log('');
  console.log(chalk.yellow('프로젝트 타입:'));
  console.log('  landingpage  - 랜딩페이지 프로젝트');
  console.log('  portfolio    - 포트폴리오 프로젝트');
  console.log('  blog         - 블로그 프로젝트');
  console.log('');
});

// 명령어 파싱
program.parse(process.argv);

// 인수가 없을 때 도움말 표시
if (!process.argv.slice(2).length) {
  program.outputHelp();
} 
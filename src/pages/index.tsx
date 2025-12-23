import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">
            🎬 一键翻译 YouTube 视频，让全球优质内容触手可及
          </p>
          <p className={styles.heroDescription}>
            突破语言障碍，畅享海外优质课程和教程
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              🚀 开始使用
            </Link>
            <Link
              className={clsx('button button--lg', styles.outlineButton)}
              to="/docs/installation">
              📥 安装指南
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

type FeatureItem = {
  title: string;
  emoji: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '一键翻译',
    emoji: '🎯',
    description: '只需点击一下，即可将 YouTube 视频翻译成中文语音，操作简单快捷。',
  },
  {
    title: '精准音频',
    emoji: '🔊',
    description: '保留原视频画面，仅替换音频为流畅的中文语音，学习体验更自然。',
  },
  {
    title: '课程精选',
    emoji: '📚',
    description: '内置优质课程列表，快速访问全球顶尖的教育资源，学习路径清晰。',
  },
  {
    title: '安全可靠',
    emoji: '🔒',
    description: '注重用户隐私保护，数据安全加密，使用更放心。',
  },
  {
    title: '实时处理',
    emoji: '⚡',
    description: '高效的翻译处理引擎，快速完成视频翻译，节省等待时间。',
  },
  {
    title: '持续更新',
    emoji: '🔄',
    description: '团队持续优化产品，定期更新功能，带来更好的使用体验。',
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.featureIcon}>{emoji}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            ✨ 核心功能
          </Heading>
          <p className={styles.sectionSubtitle}>
            艾维果让学习无国界，为您打开通往全球知识的大门
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            🎮 使用步骤
          </Heading>
          <p className={styles.sectionSubtitle}>
            三步开始您的无障碍学习之旅
          </p>
        </div>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>安装插件</h3>
            <p>在 Chrome 或 Edge 浏览器中安装艾维果插件</p>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>选择视频</h3>
            <p>从课程列表选择或打开任意 YouTube 视频</p>
          </div>
          <div className={styles.stepArrow}>→</div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>一键翻译</h3>
            <p>点击翻译按钮，等待完成后即可播放</p>
          </div>
        </div>
        <div className={styles.ctaContainer}>
          <Link
            className="button button--primary button--lg"
            to="/docs/installation">
            立即开始 →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="首页"
      description="IvyGo 艾维果 - 一键翻译 YouTube 视频的浏览器插件">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HowItWorks />
      </main>
    </Layout>
  );
}

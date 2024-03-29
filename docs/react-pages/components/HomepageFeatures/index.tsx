import React from 'react';
import clsx from 'clsx';
// @ts-ignore
import CodeBlock from "@theme/CodeBlock";
// @ts-ignore
import styles from './styles.module.css';

type FeatureItem = {
  id?: number;
  title: string;
  code: string;
  fileName: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Declarative:',
    description: (
      <>
        <b>pw-codeceptjs</b> was designed for creating more understandable tests, which can be read everyone in your team.
      </>
    ),
    fileName: 'base.spec.ts',
    code: `
import { test } from '@pw-codeceptjs/test'

test.describe('Fixture', () => {
  test('test #1', async ({ I }) => {
    await I.amOnPage('https://playwright.dev/')
    await I.waitForText('Playwright', { locator: '.navbar__inner .navbar__title' })
  })
})`.trim()
  },
  {
    title: 'Configurable:',
    description: (
      <>
        Extensions provide to expand base functionality.
      </>
    ),
    fileName: 'extension.spec.ts',
    code: `
import { test } from '@pw-codeceptjs/test'

test.describe('Fixture', () => {
  test('test #1', async ({ I }) => {
    await I.amOnPage('https://playwright.dev/')
    await I.waitForText('Playwright', { locator: '.navbar__inner .navbar__title' })
    await I.use.utils.wait(3)
  })
})
`.trim()
  },
];

function Feature({ title, description, code, fileName, id = 0 }: FeatureItem): JSX.Element {
  return (
    <div style={{ width: '100%', padding: 10 }}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    <div>
      <CodeBlock language={'typescript'} title={fileName} children={code} />
    </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row row--align-stretch">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} id={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

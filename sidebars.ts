import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'installation',
        'quickstart',
        'best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/ai-analysis',
        'features/data-visualization',
        'features/security',
        'features/performance',
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        'use-cases/finance',
        'use-cases/marketing',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/overview',
        'api/authentication',
        'api/endpoints',
      ],
    },
  ],
};

export default sidebars;

module.exports = (api) => {
  const presets = [
    [
      '@babel/env', {
        targets: {
          browsers: '> 1%'
        },
        useBuiltIns: 'usage',
        corejs: '3.0.0'
      }
    ],
    [
      '@babel/preset-react'
    ]
  ]

  const plugins = [
    'react-hot-loader/babel',
    ['import', {
      libraryName: 'antd',
      style: 'css'
    }],
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-object-rest-spread'
  ]

  api.cache(false)
  return { presets, plugins }
}

/* global tocbot:false */
require('./src/styles/tocbot.css')

const defaultOptions = {
  tocbotOptions: {
    contentSelector: '.js-toc-source',
  }
}

const tocbotOptions = {...defaultOptions.tocbotOptions}

function callTocbot() {
  tocbot.init(tocbotOptions)
}

exports.onInitialClientRender = function(_, pluginOptions) {
  const script = document.createElement('script')
  if (pluginOptions.tocbotOptions) {
    Object.assign(tocbotOptions, pluginOptions.tocbotOptions)
  }
  script.type = 'application/javascript'
  script.src = 'https://cdn.jsdelivr.net/npm/tocbot/dist/tocbot.js'
  document.body.appendChild(script)

  script.addEventListener('load', () => {
    callTocbot()
  })
}

exports.onRouteUpdate = function() {
  if (window.tocbot) {
    callTocbot()
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      callTocbot()
    })
  }
}

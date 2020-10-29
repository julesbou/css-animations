const fs = require('fs')
const sass = require('node-sass');
const cheerio = require('cheerio')

const dir = fs.opendirSync('./animations')
const json = []

let file
while ((file = dir.readSync()) !== null) {
  const content = fs.readFileSync('./animations/' + file.name).toString()
  //const dom = new jsdom(content, { contentType: 'text/xml' })
  const $ = cheerio.load(content)

  const metadata = JSON.parse($("script").html()
    .replace(/\n/g, '')
    .replace(/'/g, '"')
    .replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:([^\/])/g, '"$2":$4')
  )

  const template = $("template").html()
    //.replace(/\n(\s+)?/g, '')

  const scss = $("style").html()
  const css = sass.renderSync({ 
    data: '#' + metadata.uid + ' .anim {' + scss + '}'
  }).css.toString()

  json.push({ fileName: file.name, template, scss, css, ...metadata })
}

fs.writeFileSync('./animations.cached.js', 'animations = ' + JSON.stringify(json, null, 2))

dir.closeSync()
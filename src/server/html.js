export default (content) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>React SSR</title>
  </head>
  <body>
    <div id="app">${content}</div>
  </html>
`
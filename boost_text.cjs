const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Boost opacity for better contrast
      content = content.replace(/text-light-beige\/40/g, 'text-light-beige/80');
      content = content.replace(/text-light-beige\/50/g, 'text-light-beige/90');
      content = content.replace(/text-light-beige\/60/g, 'text-light-beige/90');
      content = content.replace(/text-light-beige\/70/g, 'text-light-beige');
      content = content.replace(/text-light-beige\/80/g, 'text-light-beige');
      
      // Make font thicker
      content = content.replace(/font-light/g, 'font-normal');
      
      // Make texts slightly larger where they are text-sm or text-lg
      // Hero
      content = content.replace(/text-lg max-w-xl font-normal/g, 'text-xl max-w-2xl font-normal');
      // Sobre
      content = content.replace(/text-lg font-normal leading-relaxed/g, 'text-xl font-normal leading-relaxed');
      // Differentials
      content = content.replace(/text-sm"\s*>\s*\{diff\.desc/g, 'text-base">\n                {diff.desc');
      // Areas
      content = content.replace(/text-sm leading-relaxed mb-6/g, 'text-base leading-relaxed mb-6');
      
      fs.writeFileSync(fullPath, content);
      console.log('Updated: ' + fullPath);
    }
  }
}
processDir('./src');

const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/data/products.js');
let content = fs.readFileSync(filePath, 'utf8');

const excludedLabels = [
  'Business Type',
  'Brand Name',
  'Shape',
  'Feature',
  'Color',
  'Application',
  'Draw Volume', // Formerly Size
  'Type',
  'Country of Origin',
  'Condition',
  'Product Code'
];

// Remove specific label entries from specs and details arrays
excludedLabels.forEach(label => {
  // Matches { label: 'LabelName', value: '...' }, with optional trailing comma and whitespace
  const regex = new RegExp(`\\s*{\\s*label:\\s*['"]${label}['"],\\s*value:\\s*['"].*?['"]\\s*},?\\s*`, 'g');
  content = content.replace(regex, '');
});

// Remove moq: '...' entries
content = content.replace(/\s*moq:\s*['"].*?['"],?\s*/g, '');

// Clean up trailing commas in arrays that might have been left behind
content = content.replace(/,\s*]/g, '\n    ]');
content = content.replace(/,\s*}/g, '\n  }');

fs.writeFileSync(filePath, content);
console.log('Successfully cleaned src/data/products.js');

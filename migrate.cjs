const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // React Router to Next.js conversions
      if (content.includes('react-router-dom')) {
        content = content.replace(/import \{([^}]*)\}\s+from\s+['"]react-router-dom['"];/g, (match, imports) => {
          let nextImports = [];
          if (imports.includes('Link')) nextImports.push("import Link from 'next/link';");
          if (imports.includes('useNavigate')) nextImports.push("import { useRouter } from 'next/navigation';");
          if (imports.includes('useLocation')) nextImports.push("import { usePathname } from 'next/navigation';");
          return nextImports.join('\n');
        });
        
        content = content.replace(/useNavigate\(\)/g, 'useRouter()');
        content = content.replace(/useLocation\(\)/g, '({ pathname: usePathname() })');
        changed = true;
      }

      // Add "use client" for client-side features
      const needsClient = content.includes('framer-motion') || 
                          content.includes('useRouter') || 
                          content.includes('usePathname') ||
                          content.includes('useState') ||
                          content.includes('useEffect');
                          
      if (needsClient && !content.includes('"use client"')) {
        content = '"use client";\n\n' + content;
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

replaceInDir('src');

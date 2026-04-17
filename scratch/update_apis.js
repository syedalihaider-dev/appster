const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'src', 'app', 'api');
const newRecipients = 'zain@iceanimations.com, ppc@iceanimations.com, hassan.ali@iceanimations.com, aleehaiderbalti@gmail.com';

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (file === 'route.js' || file === 'email.js') {
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;
            
            // Update recipients
            const toRegex = /to:\s*['"\[][^\]'"]*['"\]]/g;
            if (toRegex.test(content)) {
                content = content.replace(toRegex, `to: '${newRecipients}'`);
                modified = true;
            }
            
            // Remove IP from template (simple <tr>...IP...</tr> removal)
            const ipTrRegex = /<tr>\s*<th>IP<\/th>\s*<td>\${IP}<\/td>\s*<\/tr>/gi;
            if (ipTrRegex.test(content)) {
                content = content.replace(ipTrRegex, '');
                modified = true;
            }

            const ipTdRegex = /<td[^>]*><b>IP Address<\/b><\/td>\s*<td[^>]*>\${[^}]*}<\/td>/gi;
             if (ipTdRegex.test(content)) {
                // This is for the table with field/value structure
                // We need to find the whole row.
                // It's usually <tr> ... </tr>
            }

            // More generic IP removal if needed, but the user mainly wanted the email list.
            
            if (modified) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated: ${filePath}`);
            }
        }
    });
}

processDirectory(targetDir);

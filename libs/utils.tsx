
import { promises as fs } from 'fs';
import path from 'path';

// Collects and returns a list of sub-directories, given an input directory.
export async function getSubDirs({
    href=""
}) {

    const root_dir = path.join( process.cwd(), href);
    console.log('Utils.root_dir:',root_dir);

    const dir_items = await fs.readdir( root_dir, { withFileTypes: true } );
    console.log('Utils.dir_items:',dir_items);

    const subdirs = dir_items.filter((item) => item.isDirectory()).map((item) => item.name);

    console.log('subdirs:',subdirs);

    return subdirs; // returns: <string[]>
}

/*
import { promises as fs } from 'fs';
import path from 'path';

export default async function DirectoryReader() {
  const directoryPath = path.join(process.cwd(), 'your-directory-name');

  // Read directory with { withFileTypes: true } to check file types
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });

  const folders = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  return (
    <div>
      <h2>Subdirectories:</h2>
      <ul>
        {folders.map((folder) => (
          <li key={folder}>{folder}</li>
        ))}
      </ul>
    </div>
  );
}

*/
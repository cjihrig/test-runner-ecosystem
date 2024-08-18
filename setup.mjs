import { basename, dirname, join } from 'node:path';
import { snapshot } from 'node:test';
import { format } from 'pretty-format';

snapshot.setDefaultSnapshotSerializers([format]);
snapshot.setResolveSnapshotPath((testFile) => {
  return join(
    join(dirname(testFile), '__snapshots__'),
    `${basename(testFile)}.snap`,
  );
});

const fs = require("fs");
import { announcement as Announcement } from "./data/doc-it/Announcement";
import { roadmap as R38 } from "./data/doc-it/R38Roadmap";
import { roadmap as R37 } from "./data/doc-it/R37Roadmap";
import { roadmap as R36 } from "./data/doc-it/R36Roadmap";
import { roadmap as R35 } from "./data/doc-it/R35Roadmap";
import { roadmap as R34 } from "./data/doc-it/R34Roadmap";
import { roadmap as R33 } from "./data/doc-it/R33Roadmap";
import { roadmap as R32 } from "./data/doc-it/R32Roadmap";
import { roadmap as R31 } from "./data/doc-it/R31Roadmap";
import { roadmap as R30 } from "./data/doc-it/R30Roadmap";
import { roadmap as R29 } from "./data/doc-it/R29Roadmap";
import { roadmap as R28 } from "./data/doc-it/R28Roadmap";
import { roadmap as R27 } from "./data/doc-it/R27Roadmap";
import { roadmap as R26 } from "./data/doc-it/R26Roadmap";
import { roadmap as R25 } from "./data/doc-it/R25Roadmap";
import { roadmap as R24 } from "./data/doc-it/R24Roadmap";
import { roadmap as R23 } from "./data/doc-it/R23Roadmap";
import { roadmap as R22 } from "./data/doc-it/R22Roadmap";
import { roadmap as R21 } from "./data/doc-it/R21Roadmap";
import { roadmap as R20 } from "./data/doc-it/R20Roadmap";
import { roadmap as R19 } from "./data/doc-it/R19Roadmap";
import { roadmap as R18 } from "./data/doc-it/R18Roadmap";
import { roadmap as R17 } from "./data/doc-it/R17Roadmap";
import { roadmap as R16 } from "./data/doc-it/R16Roadmap";

type DataRecord = {
  collectionName: string;
  dataSource: any;
};

const entries: DataRecord[] = [
  {
    collectionName: "doc-it/R38Roadmap",
    dataSource: R38,
  },
  {
    collectionName: "doc-it/R37Roadmap",
    dataSource: R37,
  },
  {
    collectionName: "doc-it/R36Roadmap",
    dataSource: R36,
  },
  {
    collectionName: "doc-it/R35Roadmap",
    dataSource: R35,
  },
  {
    collectionName: "doc-it/R34Roadmap",
    dataSource: R34,
  },
  {
    collectionName: "doc-it/R33Roadmap",
    dataSource: R33,
  },
  {
    collectionName: "doc-it/R32Roadmap",
    dataSource: R32,
  },
  {
    collectionName: "doc-it/R31Roadmap",
    dataSource: R31,
  },
  {
    collectionName: "doc-it/R30Roadmap",
    dataSource: R30,
  },
  {
    collectionName: "doc-it/R29Roadmap",
    dataSource: R29,
  },
  {
    collectionName: "doc-it/R28Roadmap",
    dataSource: R28,
  },
  {
    collectionName: "doc-it/R27Roadmap",
    dataSource: R27,
  },
  {
    collectionName: "doc-it/R26Roadmap",
    dataSource: R26,
  },
  {
    collectionName: "doc-it/R25Roadmap",
    dataSource: R25,
  },
  {
    collectionName: "doc-it/R24Roadmap",
    dataSource: R24,
  },
  {
    collectionName: "doc-it/R23Roadmap",
    dataSource: R23,
  },
  {
    collectionName: "doc-it/R22Roadmap",
    dataSource: R22,
  },
  {
    collectionName: "doc-it/R21Roadmap",
    dataSource: R21,
  },
  {
    collectionName: "doc-it/R20Roadmap",
    dataSource: R20,
  },
  {
    collectionName: "doc-it/R19Roadmap",
    dataSource: R19,
  },
  {
    collectionName: "doc-it/R18Roadmap",
    dataSource: R18,
  },
  {
    collectionName: "doc-it/R17Roadmap",
    dataSource: R17,
  },
  {
    collectionName: "doc-it/R16Roadmap",
    dataSource: R16,
  },
  {
    collectionName: "doc-it/Announcement",
    dataSource: Announcement,
  },
];

for (const entry of entries) {
  const path = `deployed/${entry.collectionName}`;
  fs.writeFile(
    `${path}.json`,
    JSON.stringify(entry.dataSource, null, 2),
    (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
      // success case, the file was saved
      console.log(`Wrote entry '${entry.collectionName}' to '${path}.json'`);
    }
  );
}
